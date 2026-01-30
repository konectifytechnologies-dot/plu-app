'use client'
import { IconPencil } from "@tabler/icons-react"
import { AvatarFallback, Avatar } from "../ui/avatar"
import { getInitials } from "@/app/utils/utilFns"
import AddLandlord from "./AddLandlord"
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button"

export default function LandlordList(){
    const landlords = [
        {
            id:1,
            name:'Peter Mwangi',
            email:'swazicreatives@gmail.com',
            number:'070518969'
        },
        {
            id:1,
            name:'Peter Mwangi',
            email:'swazicreatives@gmail.com',
            number:'070518969'
        },
        {
            id:1,
            name:'Peter Mwangi',
            email:'swazicreatives@gmail.com',
            number:'070518969'
        },

    ]
    return(
        <>
            <div className="grid grid-cols-1 gap-3">
                {landlords.map((tenant)=> {
                    return(
                        <div key={tenant.id} className="flex justify-between items-center gap-2 border border-input px-2 py-2 rounded-md">
                            <div className="flex items-center gap-2">
                                <Avatar className="size-12">
                                    <AvatarFallback>{getInitials(tenant.name)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h6 className="font-mono text-sm">{tenant.name}</h6>
                                    <p className="font-sans text-sm text-muted-foreground">{tenant.number}</p>
                                </div>
                            </div>
                            <div>
                                    <Dialog>
                                        <DialogTrigger >
                                            <button className="px-4 py-2 font-sans flex items-center w-full gap-1 text-white cursor-pointer transition-colors duration-300 transform bg-primary rounded-sm text-xs hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                                <IconPencil size={16} /><span>Edit</span>
                                            </button>
                                        </DialogTrigger>
                                    <DialogPopup className="sm:max-w-sm">
                                        
                                        <DialogHeader>
                                            <DialogTitle className="font-mono">Edit Landlord</DialogTitle>
                                            <DialogDescription className="font-sans text-muted-foreground">Edit Landlord details</DialogDescription>
                                        </DialogHeader>
                                        <DialogPanel className="grid gap-4">
                                           <AddLandlord initialData={tenant} />
                                        </DialogPanel>
                                        <DialogFooter>
                                            <DialogClose render={<Button variant="ghost" />}>
                                            Cancel
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogPopup>
                                </Dialog>
                            </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}