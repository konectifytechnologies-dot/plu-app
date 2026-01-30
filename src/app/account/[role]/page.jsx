import AddLandlord from "@/components/agents/AddLandlord"
import { IconBuilding, IconHome, IconPlus, IconUser, IconUsers } from "@tabler/icons-react"
import AddProperty from "@/components/agents/AddProperty"
import AddUnit from "@/components/agents/AddUnit"
import { Separator } from "@/components/ui/separator"
import AddTenant from "@/components/agents/AddTenant";
import SearchBar from "@/components/ui/searchbar";
import PropertiesList from "@/components/agents/PropertiesList";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Addnew from "@/components/ui/add-new";
import { Children } from "react";
import { cn } from "@/lib/utils"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"


export default async function AgentDashboard({params}){
    const {role} = await params;
    const session = await getServerSession(authOptions);

    /*const cards = [
        {
            label:'Landlords',
            total: 100,
            title:'Add A Landlord',
            description: 'Add a new Landlord',
            icon: IconUsers,
            component: <AddLandlord />,
            display: role === 'agent'
        },
        {
            label:'Properties',
            total:20,
            title:'Add Property',
            description: 'Add a New property',
            icon:IconBuilding,
            component:<AddProperty />,
            display:true
        },
        {
            label: 'Units',
            total:10,
            title:'Add House Unit',
            description:'Add a new house unit',
            icon: IconHome,
            component: <AddUnit />,
            display:true
        },
        {
            label:'Tenants',
            total:200,
            title:'Add a Tenant',
            icon: IconUser,
            description:'Add a new Tenant',
            component: <AddTenant />,
            display:true
        }
    ]*/
    return(
        <>
        <div 
            className={cn("grid grid-cols-3 gap-2", role === 'agent' && 'grid-cols-4')}>
                {role === 'agent' && (
                <Card>
                    <CardHeader>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className="bg-purple-100 h-12 w-12 rounded-full grid place-items-center">
                                <IconUser className="text-primary" />
                            </div>
                            <div className="space-y-2 col-span-3">
                                <CardDescription className="font-sans">Total Number of Landlords</CardDescription>
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-sans font-semibold tabular-nums @[250px]/card:text-3xl">
                            100 <small className="font-sans text-muted-foreground text-xs">Landlords</small>
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <Separator className="my-2" />
                        <Addnew
                            label="Add Landlord"
                            title="Add a new Landlord"
                            description=""
                        >
                            <AddLandlord />
                        </Addnew>
                    </CardFooter>
                </Card>
                )}
               <Card>
                    <CardHeader>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className="bg-purple-100 h-12 w-12 rounded-full grid place-items-center">
                                <IconBuilding className="text-primary" />
                            </div>
                            <div className="space-y-2 col-span-3">
                                <CardDescription className="font-sans">Total Number of </CardDescription>
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-sans font-semibold tabular-nums @[250px]/card:text-3xl">
                            10 <small className="font-sans text-muted-foreground text-xs">Properties</small>
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <Separator className="my-2" />
                        <Addnew
                            label="Add Property"
                            title="Add a new Property"
                            description=""
                        >
                            <AddProperty />
                        </Addnew>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className="bg-purple-100 h-12 w-12 rounded-full grid place-items-center">
                                <IconBuilding className="text-primary" />
                            </div>
                            <div className="space-y-2 col-span-3">
                                <CardDescription className="font-sans">Total Number of Units</CardDescription>
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-sans font-semibold tabular-nums @[250px]/card:text-3xl">
                            100 <small className="font-sans text-muted-foreground text-xs">Units</small>
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <Separator className="my-2" />
                        <Addnew
                            label="Add Unit"
                            title="Add a new Unit"
                            description=""
                        >
                            <AddUnit />
                        </Addnew>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <div className="bg-purple-100 h-12 w-12 rounded-full grid place-items-center">
                                <IconUsers className="text-primary" />
                            </div>
                            <div className="space-y-2 col-span-3">
                                <CardDescription className="font-sans">Total Number of Tenants</CardDescription>
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-sans font-semibold tabular-nums @[250px]/card:text-3xl">
                            100 <small className="font-sans text-muted-foreground text-xs">Tenants</small>
                        </CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <Separator className="my-2" />
                        <Addnew
                            label="Add Tenant"
                            title="Add a new Tenant"
                            description=""
                        >
                            <AddTenant />
                        </Addnew>
                    </CardFooter>
                </Card>
                {/*cards.map((card)=> {
                    return(
                        <div key={card.title}>
                        {card.display && 
                        
                        </div>
                    )
                })*/}      
            </div>
            <PropertiesList />
        </>
    )
}

