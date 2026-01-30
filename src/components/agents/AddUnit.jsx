'use client'
import { useSetState } from "@mantine/hooks";
import Dropdown from "../ui/dropdown";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Field, FieldLabel } from "../ui/field";
import { useParams } from "next/navigation";

export default function AddUnit({initialData}){
    const isEditMode = Boolean(initialData)
    const {id} = useParams();
    const [name, setName] = useState(isEditMode ? initialData.name : '' )
    const [house, setHouse] = useSetState({
        id:isEditMode ? initialData.property_id : null ,
        name:isEditMode ? initialData.property_name : null
    });

    const properties = [
        {id:1, name:'John does'},
        {id:2, name: 'Jane Doe'},
        {id:3, name:'John does'},
        {id:4, name: 'Jane Doe'},
        {id:5, name:'John does'},
        {id:6, name: 'Jane Doe'}
    ]

    useEffect(()=> {
        if(id && !isEditMode){
            const item = properties.find((prop)=> prop.id === 1);
            console.log(item);
            //setHouse({id:item.id, name:item.name})
        }
    },[id])
    

    const handleselecthouse = (item) => {
        setHouse({id:item.id, name:item.name})
    }

    const form = useForm({
        defaultValues: {
            name: initialData?.name ?? "",
            bedrooms: initialData?.bedrooms ?? "",
            rent:initialData?.rent ?? '',

        },
    })
    const { handleSubmit, register, formState } = form
    const { isSubmitting } = formState

    async function onSubmit(){ 
        try{
           const params = {
                name,
                property_id:house.id
           }
           console.log(params);

        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Field className="gap-2">
                    <FieldLabel htmlFor="name"> Unit name<span className="text-red-500">*</span></FieldLabel>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        {...register("name", { required: true })}
                        required
                    />
                </Field>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                    <div className="col-span-full sm:col-span-3">
                        <Field className="gap-2">
                            <FieldLabel htmlFor="rooms">Number of Bedrooms</FieldLabel>
                            <Input
                                type="text"
                                id="bedrooms"
                                name="bedrooms"
                                {...register("bedrooms", { required: true })}
                                required
                            />
                        </Field>
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <Field className="gap-2">
                            <FieldLabel htmlFor="rooms">Rent Amount</FieldLabel>
                            <Input
                                type="text"
                                id="rent"
                                name="rent"
                                {...register("rent", { required: true })}
                                required
                            />
                        </Field>
                    </div>
                </div>
                <div>
                    <FieldLabel>Property</FieldLabel>
                    <Dropdown value={house.name} items={properties} placeholder="Select Property" handleChange={handleselecthouse} />
                </div>
                <br />
                 <Button type="submit"  className="font-sans w-full">Add Unit</Button>
            </form>
        </>
    )
}