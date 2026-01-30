'use client'
import { Avatar, AvatarFallback } from "../ui/avatar"
import { IconPencil, IconTrash } from "@tabler/icons-react"
import { getInitials } from "@/app/utils/utilFns"
import AddTenant from "./AddTenant"
import Addnew from "../ui/add-new"

export default function PropertyTenantList(){
    const tenants = [
        {
            id:1,
            name:'Peter Mwangi',
            email:'swazicreatives@gmail.com',
            number:'070518969'
        },
        {
            id:2,
            name:'Peter Mwangi',
            email:'swazicreatives@gmail.com',
            number:'070518969'
        },
        {
            id:3,
            name:'Peter Mwangi',
            email:'swazicreatives@gmail.com',
            number:'070518969'
        },

    ]
    return(
        <>
            <div className="grid grid-cols-1 gap-3">
                {tenants.map((tenant)=> {
                    return(
                      <div key={tenant.id} className="flex flex-col md:flex-row justify-between md:items-center gap-2 border border-input px-2 py-2 rounded-md">
                            <div className="flex items-center gap-2">
                                <Avatar className="size-12">
                                    <AvatarFallback className="font-sans">{getInitials(tenant.name)}</AvatarFallback>
                                </Avatar>
                                <div className="ml-2">
                                    <p className="text-sm leading-none font-medium">{tenant.name}</p>
                                    <p className="text-muted-foreground text-sm">{tenant.number}</p>
                                </div>
                            </div>
                            <div className="border-t flex items-center gap-2 border-input py-2 md:border-none md:py-0">
                                <Addnew label="Edit Tenant" fullwidth={false} title="Edit Tenant" description="Edit tenant details">
                                    <AddTenant initialData={tenant} /> 
                                </Addnew>
                                <button className="flex items-center gap-2 text-sm bg-destructive py-2 cursor-pointer px-6 rounded-lg text-white font-sans">
                                    <IconTrash size={16} />Delete
                                </button>

                            </div>
                        </div>
                    )
                })}
            </div> 
        </>
    )
}