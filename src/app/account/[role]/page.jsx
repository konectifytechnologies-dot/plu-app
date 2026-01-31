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
import { getAgent, getAgentLandlords } from "@/data-access-layer/agent"
import LandlordsDropdown from "@/components/agents/LandlordsDropdown"


export default async function AgentDashboard({ params }) {
    const { role } = await params;
    const user = await getAgent();




    return (
        <>
            <div>
                <h1 className="text-foreground font-heading mb-2 font-sans text-3xl">
                    Welcome Back <br />
                    <span className="text-muted-foreground font-sans text-base">{user.agent.name}</span>
                </h1>
            </div>
            <div
                className={cn("grid grid-cols-3 gap-2", role === 'agent' && 'grid-cols-4')}>
                {user.agent.role === 'agent' && (
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
                                {user.stats.total_landlords} <small className="font-sans text-muted-foreground text-xs">Landlords</small>
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
                                <CardDescription className="font-sans">Total Number of Properties </CardDescription>
                            </div>
                        </div>
                        <CardTitle className="text-2xl font-sans font-semibold tabular-nums @[250px]/card:text-3xl">
                            {user.stats.total_properties} <small className="font-sans text-muted-foreground text-xs">Properties</small>
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
                            {user.stats.total_units} <small className="font-sans text-muted-foreground text-xs">Units</small>
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
                            {user.stats.total_tenants} <small className="font-sans text-muted-foreground text-xs">Tenants</small>
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
            </div>
            <PropertiesList properties={user.properties} />
        </>
    )
}

