'use client'
import { useState } from "react"
import { Field, FieldTitle, FieldLabel, FieldContent, FieldDescription} from "../ui/field";
import { useSetState } from "@mantine/hooks"
import Dropdown from "../ui/dropdown"
import { Input } from "../ui/input"
import { Checkbox } from "../ui/checkbox";

export default function Addutility(){
    const [data, setData] = useSetState({id:'', name:'', unit_id:'', unit_name:''})
    const [hasPreviousReading, setHasPreviousReading] = useState(false)
    const properties = [];
    const units = [];

    return(
        <>
         <form action="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                <div className="col-span-full sm:col-span-3">
                    <FieldLabel>Select Property</FieldLabel>
                    <Dropdown value={data.name} items={properties} placeholder="Select Property" handleChange={(value)=> setData({id:value.id, name:value.name})} />
                </div>
                <div className="col-span-full sm:col-span-3">
                    <FieldLabel>Select Unit</FieldLabel>
                    <Dropdown value={data.unit_name} items={units} placeholder="Select Unit" handleChange={(value)=> setData({unit_id:value.id, unit_name:value.name})} />
                </div>
            </div>
            <div className="py-4">
                    <FieldLabel>Current Reading</FieldLabel>
                    <Input 
                        type="number" 
                        id="current_reading"
                        name="current_reading"
                    />
            </div>
            <FieldLabel>
                        <Field orientation="horizontal">
                          <Checkbox id="hasServiceCharge" checked={hasPreviousReading} onCheckedChange={setHasPreviousReading} name="toggle-checkbox-2" />
                          <FieldContent>
                            <FieldTitle>Add Previous Reading</FieldTitle>
                            <FieldDescription>
                              Add a previous Reading if this is the first entry
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                    </FieldLabel>
                    {hasPreviousReading && (
                        <Field className="py-4">
                            <FieldLabel htmlFor="number">Previous Reading</FieldLabel>
                            <Input
                                type="number"
                                id="previous_reading"
                                name="previous_reading"
                                //{...register("service_charge", { required: true })}
                                //autoComplete="given-name"
                                
                                
                            />
                        </Field>
                    )}
         </form>
        </>
    )
}