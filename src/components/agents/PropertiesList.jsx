'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AddProperty from "./AddProperty";
import { IconBuilding, IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PropertiesList(){
    const {role} = useParams()
    const isAgent = role === 'agent';
    const properties = [
        {
            id:1,
            picture: "https://disqav.s3.eu-west-1.amazonaws.com/disqav/placeholder.png",
            name: 'Hannah Apartment',
            location: 'Limuru Town',
            landlord_id:2,
            landlord_name:'Joseph Mbugua'
        },
        {
            id:2,
            picture:"https://disqav.s3.eu-west-1.amazonaws.com/disqav/placeholder.png",
            name: 'Hannah Apartment',
            location: 'Limuru Town',
            landlord_id:2,
            landlord_name:'Joseph Mbugua'
        },
        {
            id:3,
            picture: "https://disqav.s3.eu-west-1.amazonaws.com/disqav/placeholder.png",
            name: 'Hannah Apartment',
            location: 'Limuru Town',
            landlord_id:2,
            landlord_name:'Joseph Mbugua'
        }
    ]
    return(
        <>
            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Properties</CardTitle>
                    <CardDescription>
                        <span className="font-sans">All Added Properties</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-2 sm:px-6">
                    <div className="grid grid-cols-1 gap-2">
                    {properties.map((prop, index)=> (
                        <div key={prop.id} className="flex rounded-lg flex-col md:flex-row gap-4 md:items-center border border-input bg-gray-50 p-2 justify-between" >
                            <div className="flex items-center gap-2  rounded-md">
                                <img src="https://disqav.s3.eu-west-1.amazonaws.com/disqav/placeholder.png" width={80} height={80} className="w-16 h-16 rounded-md" />
                                <div>
                                    <h6 className="font-sans font-medium text-sm">{prop.name}</h6>
                                    <p className="font-sans text-sm text-muted-foreground">{prop.location}</p>
                                </div>
                            </div>
                            <div className="py-4 md:py-0 border-t md:border-0 flex items-center gap-2 border-input">
                                <EditProperty property={prop} />
                                <Link href={`/account/${role}/property/${prop.id}`} className="flex items-center gap-2 text-sm bg-blue-500 py-2 cursor-pointer px-6 rounded-lg text-white font-sans">
                                    <IconBuilding size={16} /> View Property
                                </Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </CardContent>
            </Card>
            {/*<div className="grid grid-cols-1 gap-4">
                
            </div>*/}
        </>
    )
}

const EditProperty = ({property}) => {
    return(
        <>
        {/*<Dialog>
            <DialogTrigger>
                <button className="flex items-center gap-2 text-sm bg-blue-500 py-2 cursor-pointer px-6 rounded-lg text-white font-sans">
                    <IconPencil size={16} />Edit
                </button>
            </DialogTrigger>
            <DialogPopup className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Edit Property</DialogTitle>
                    <DialogDescription>
                    Edit property {property.name}
                    </DialogDescription>
                </DialogHeader>
                <DialogPanel className="grid gap-4">
                    <AddProperty initialData={property} />
                </DialogPanel>
                <DialogFooter>
                    <DialogClose render={<Button variant="ghost" />}>
                    Cancel
                    </DialogClose>
                </DialogFooter>
            </DialogPopup>
        </Dialog>*/}
        </>
    )
}