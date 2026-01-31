'use client'
import { Button } from "../ui/button";
import { IconPlus } from "@tabler/icons-react"
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { useSetState } from "@mantine/hooks";
import Submitbtn from "../ui/submitbtn";
import { createLandlord } from "@/actions/postActions";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { toast } from "sonner";


export default function AddLandlord({ initialData }) {
    const isEditMode = Boolean(initialData);
    const path = usePathname();
    const [error, setError] = useSetState(null);
    const [loading, setLoading] = useState(false);

    const [data, setData] = useSetState(isEditMode ? initialData.additional_data : { landlord_type: '' })

    const form = useForm({
        defaultValues: {
            name: initialData?.name ?? "",
            number: initialData?.number ?? "",
            email: initialData?.email ?? ''
        },
    })
    const { handleSubmit, register, formState } = form
    const { isSubmitting } = formState

    async function onSubmit(values) {
        try {
            setLoading(true);
            const params = {
                name: values.name,
                email: values.email,
                number: values.number,
                additional_data: data
            }
            const result = await createLandlord(params, path);
            if (result.error) {
                setError(result.error)
            } else {
                setLoading(false);
                toast(result.message, { position: "top-center" });
            }


        } catch (error) {
            console.log(error.message)
        }
    }

    const types = ["Individual", "Company"]
    return (
        <>
            {error && (
                <Alert variant="destructive" className="max-w-md">
                    <AlertCircleIcon />
                    <AlertTitle>Login failed</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FieldLabel className="py-3">Landlord Type</FieldLabel>
                    <RadioGroup
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                        defaultValue={data.landlord_type}
                        onValueChange={(value) => setData({ landlord_type: value })}
                    >
                        {types.map((item) => (
                            <div
                                key={item}
                                className={cn("border-input relative flex flex-col gap-2 rounded-md border p-4 shadow-xs outline-none", data.landlord_type === item && 'border-blue-600 bg-blue-50')}
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
                <br />
                <Submitbtn type="submit" text="Add Property" loading={loading} fullwidth={true} />
            </form>
        </>
    )
}