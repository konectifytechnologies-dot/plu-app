'use client'
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle, } from "../ui/card";
import { randomId, useSetState } from "@mantine/hooks";
import { useState } from "react";
import items from "@/lib/defaultItems";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import Dropdown from "../ui/dropdown";
import { Field, FieldLabel } from "../ui/field";
import { Separator } from "../ui/separator";

export default function AddRepairForm({initialData}){
    const isEditmode = Boolean(initialData);
    const [repairItems, setRepairItems] = useState(isEditmode ? initialData.items : items)
    const [repair, setRepair] = useSetState({
        description:isEditmode ? initialData.description : '', 
        cost:isEditmode ? initialData.cost : 0
    });

    const [house, setHouse] = useSetState({
        id:isEditmode ? initialData.property_id : null, 
        name:isEditmode ? initialData.property_name : null
    });

    const handleHouse = (item) => {
        setHouse({id:item.id, name:item.name})
    }

    const houses = [
        {
            id:1,
            name:'Hannah apartment'
        },
        {
            id:2,
            name:'Pamar Plaza'
        }
    ];
    const addrepairs = ()=> {
        const totalCost = repairItems.reduce(
            (sum, item) => sum + item.price,0
        );
        console.log(totalCost)
    }
    return(
        <>
            <div className="">
                <div className="">
                    <h3 className="text-2xl font-semibold text-foreground dark:text-foreground">
                        Add a Repair
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground dark:text-muted-foreground">
                        Add a new repair or maintenance
                    </p>
                    <form action="#" method="post" className="mt-8">
                         <div>
                            <Label>Description</Label>
                            <Textarea value={repair.description} onChange={(e)=> setRepair({description:e.target.value})} />
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6 py-4">
                            <div className="col-span-full sm:col-span-3">
                                <Field className="gap-2">
                                    <FieldLabel htmlFor="first-name"> Select Property</FieldLabel>
                                    <Dropdown items={houses} value={house.name} placeholder="Select Property" handleChange={handleHouse} />
                                </Field> 
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <Field className="gap-2">
                                    <FieldLabel htmlFor="first-name">Estimated Repair Cost</FieldLabel>
                                    <Input type="text" />
                                </Field> 
                            </div>
                        </div>
                        <Separator className="my-6" />
                        <RepairItems setRepairItems={setRepairItems} repairItems={repairItems}/>
                        <br />
                        <Button type="button" className="w-full" onClick={addrepairs}><IconPlus />Add Repair</Button>
                        <br />
                    </form>
                </div>
            </div>
            {/*<div>
                <Card>
                    <CardHeader>
                        <CardTitle>Repair Details</CardTitle>
                        <CardDescription>Provide details of this repair</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label>Description</Label>
                            <Textarea value={repair.description} onChange={(e)=> setRepair({description:e.target.value})} />
                        </div>
                        <div className="py-4">
                            <Label> Select Property/House</Label>
                            
                        </div>
                        <div>
                            <Label>Repair Cost</Label>
                            <Input type="number" valu={repair.cost} onChange={()=> setRepair({cost:e.target.value})} />
                        </div>
                    </CardContent> 
                </Card>
                <br />
                <Card>
                    <CardHeader>
                        <CardTitle>Repair Items</CardTitle>
                        <CardDescription>List the items to repair or replace</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RepairItems repairItems={repairItems} setRepairItems={setRepairItems} />
                    </CardContent>
                </Card>
                <Button type="button" onClick={addrepairs}><IconPlus />Add Repair</Button>
            </div>*/}
        </>
    )
}

export const RepairItems = ({repairItems, setRepairItems})=> {
const item = {id:randomId(), title:'', price:0}
const addRepairItem = () => {
  setRepairItems((prev) => [...prev, item]);
};

function updateRepairItem(id,field,value) {
  setRepairItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? {
            ...item,
            [field]: field === "price" ? Number(value) || 0 : value,
          }
        : item
    )
  );
}


const removeRepairItem = (id) => {
  setRepairItems((prev) => prev.filter((item) => item.id !== id));
};
    return(
        <>
            <div className="">
                <div className="py-2">
                    <h3 className="text-2xl font-sans font-semibold text-foreground dark:text-foreground">
                        Add a Repair Items
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground dark:text-muted-foreground">
                        Add a new repair items
                    </p>
                </div>
                {repairItems.map((item)=> {
                    return(
                        <div className="grid grid-cols-3 gap-2 items-center py-2">
                            <Field>
                                <FieldLabel className="text-sm">Item name</FieldLabel>
                                <Input 
                                    type="text" 
                                    value={item.title}
                                    onChange={(e) =>
                                        updateRepairItem(item.id, "title", e.target.value)
                                    }
                                />
                            </Field>
                            <Field>
                                <FieldLabel className="text-sm">Item Cost</FieldLabel>
                                <Input 
                                    type="number"
                                    value={item.price}
                                    onChange={(e) =>
                                        updateRepairItem(item.id, "price", e.target.value)
                                    }
                                />
                            </Field>
                           <div>
                            <Label><span className="text-white">btn</span></Label>
                            <Button type="button" variant="ghost" onClick={()=>removeRepairItem(item.id)}><IconTrash className="text-destructive"/></Button>
                           </div>
                        </div>
                    )
                })}
            </div>
            <br />
            <Button type="button" onClick={addRepairItem}><IconPlus />Add repair Item</Button>
            <br />
        </>
    )
}