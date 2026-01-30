'use client'
import { Button } from "../ui/button";
import { IconPlus } from "@tabler/icons-react"
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";


export default function AddLandlord({initialData}){
    const isEditMode = Boolean(initialData);
    const [landlordType, setLandlordType] = useState(isEditMode ? initialData.landlord_type : '')
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
            console.log(values);

        }catch(error){
            console.log(error.message)
        }
    }

    const types = ["Individual", "Company"]
    return(
        <>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FieldLabel className="py-3">Landlord Type</FieldLabel>
                    <RadioGroup
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        defaultValue={landlordType}
                        onValueChange={(value) =>setLandlordType(value)}
                    >
                    {types.map((item) => (
                        <div
                            key={item}
                            className={cn("border-input relative flex flex-col gap-2 rounded-md border p-4 shadow-xs outline-none", landlordType === item && 'border-blue-600 bg-blue-50')}
                        >
                            <div className="flex justify-between">
                                <RadioGroupItem
                                    id={item}
                                    value={item}
                                    className="order-1 after:absolute after:inset-0"
                                />

                                <FieldLabel
                                    htmlFor={item}
                                    className="block text-sm font-medium text-foreground"
                                >
                                    {item}
                                </FieldLabel>
                            </div>
                        </div>
                    ))}
                    </RadioGroup>
                </div>
                <Separator className="my-3" />
                <Field className="gap-2">
                    <FieldLabel htmlFor="first-name">Landlord name</FieldLabel>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        {...register("name", { required: true })}
                        placeholder="e.g John Doe"
                    />
                </Field>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 py-4">
                    <div className="col-span-full sm:col-span-3">
                        <Field className="gap-2">
                            <FieldLabel htmlFor="first-name">Landlord Phone Number</FieldLabel>
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
                            <FieldLabel htmlFor="last-name">Landlord Email Address</FieldLabel>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                {...register("email", { required: true })}
                            />
                        </Field>
                    </div>
                </div>
                <Button type="button" className="w-full font-sans"><IconPlus /> Add Landlord</Button>
            </form>
            {/*<form onSubmit={handleSubmit(onSubmit)}> 
                <Field>
                    <label className="block text-sm font-sans text-gray-500 dark:text-gray-300">Landlord Name</label>
                    <Input id="name" {...register("name", { required: true })}  type="text" />
                </Field>
                <Field className="py-4">
                    <label className="block text-sm font-sans text-gray-500 dark:text-gray-300">Landlord Phone Number</label>
                    <Input id="number" {...register("number", { required: true })}  type="text" />
                </Field>
                <Field>
                    <label  className="block text-sm font-sans text-gray-500 dark:text-gray-300">Landlord Email Address</label>
                    <Input id="email" {...register("email", { required: true })}  type="text" />
                </Field>
                <br />
                 <Button type="submit" className="w-full font-sans"><IconPlus />Add Landlord</Button>
            </form>*/}
        </>
    )
}