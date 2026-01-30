'use client'
import { useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Field, FieldLabel } from "../ui/field"
import { useSetState } from "@mantine/hooks"
import { Label } from "../ui/label"
import Dropdown from "../ui/dropdown"
import { IconPlus } from "@tabler/icons-react"

export default function AddTenant({initialData}){
    const isEditMode = Boolean(initialData)
    const [house, setHouse] = useSetState({
        id:isEditMode ? initialData.property_id : null, 
        name:isEditMode ? initialData.property_name : null
    });
    const [unit, setUnit] = useSetState({
        id:isEditMode ? initialData.unit_id : null,
        name:isEditMode ? initialData.unit_name : null
    });

    const units = [
        {id:1, name:'John does'},
        {id:2, name: 'Jane Doe'}
    ]
    
    const houses = [
        {id:1, name:'Hannah Apartment'},
        {id:2, name: 'Block Apartment'}
    ]
    
    const handleselecthouse = (item) => {
        setHouse({id:item.id, name:item.name})
    }
    const handleSelectUnit = (item) => {
        setUnit({id:item.id, name:item.name})
    }
    const form = useForm({
        defaultValues: {
            name: initialData?.name ?? "",
            number: initialData?.number ?? "",
            email:initialData?.email ?? ''
        },
    })
    const { handleSubmit, register, formState } = form
    const { isSubmitting } = formState

    async function onSubmit(values){ 
        try{
            const params= {
                name:values.name,
                number:values.number,
                email:values.email,
                property_id:house.id,
                unit_id:unit.id
            }
            console.log(params);

        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <Field className="gap-2">
                    <FieldLabel htmlFor="first-name">Tenant name<span className="text-red-500">*</span></FieldLabel>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        {...register("name", { required: true })}
                        required
                    />
                </Field>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 py-4">
                    <div className="col-span-full sm:col-span-3">
                        <Field className="gap-2">
                            <FieldLabel htmlFor="first-name">Tenant Phone Number<span className="text-red-500">*</span></FieldLabel>
                            <Input
                                type="text"
                                id="number"
                                name="number"
                                {...register("number", { required: true })}
                                required
                            />
                        </Field>
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <Field className="gap-2">
                            <FieldLabel htmlFor="first-name">Tenant Email<span className="text-red-500">*</span></FieldLabel>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                {...register("email", { required: true })}
                                required
                            />
                        </Field>
                    </div>
                </div>
                <div className="py-4">
                    <FieldLabel>Property</FieldLabel>
                    <Dropdown value={house.name} items={houses} placeholder="Select Property" handleChange={handleselecthouse} />
                </div>
                <div className="py-4">
                    <FieldLabel>Unit</FieldLabel>
                    <Dropdown value={unit.name} items={units} placeholder="Select Property Unit" handleChange={handleSelectUnit} />
                </div>
                <Button type="submit" className="w-full"><IconPlus /> Add Tenant</Button>
            </form>
            {/*<form onSubmit={handleSubmit(onSubmit)}>
                <Field>
                    <label  class="block text-sm font-sans text-gray-500 dark:text-gray-300">Tenant Name</label>
                    <Input id="name" {...register("name", { required: true })}  type="text" />
                </Field>
                <Field className="py-4">
                    <label  class="block text-sm font-sans text-gray-500 dark:text-gray-300">Tenant Phone Number</label>
                    <Input id="number" {...register("number", { required: true })}  type="text" />
                </Field>
                <Field className="py-4">
                    <label  class="block text-sm font-sans text-gray-500 dark:text-gray-300">Tenant Email Address</label>
                    <Input id="email" {...register("email", { required: true })}  type="text" />
                </Field>
                <div className="grid gap-2 py-4">
                    <Label>Select House</Label>
                    <Dropdown value={house.name} items={landlords} placeholder="Select Property" handleChange={handleselecthouse} />
                </div>
                
                <br />
                <Button type="submit" className="font-sans w-full">Add Tenant</Button>
            </form>*/}
        </>
    )
}

const SelectUnit = ({unit, setUnit})=> {
    //const isEditMode = Boolean(initialData);
    
    const units = [
        {id:1, name:'John does'},
        {id:2, name: 'Jane Doe'}
    ]
    
    const handleselecthouse = (item) => {
            setUnit({id:item.id, name:item.name})
    }
    return(
        <>
        <div className="grid gap-2">
            <Label>Select House Unit</Label>
            <Dropdown value={unit.name} items={units} placeholder="Select House Unit" handleChange={handleselecthouse} />
        </div>

        </>
    )
}