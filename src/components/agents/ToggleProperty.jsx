import { Tabs,
  TabsContent,
  TabsList,
  TabsTrigger, } from "../ui/tabs"
import PropertyTenantList from "./PropertyTenantList"
import UnitsList from "./UnitsList"
export default function ToggleProperty(){
    return(
        <>
            <Tabs defaultValue="tenants" className="w-full">
                <TabsList>
                    <TabsTrigger value="tenants" className="px-6 cursor-pointer">Tenants</TabsTrigger>
                    <TabsTrigger value="units" className="px-6 cursor-pointer">Units</TabsTrigger>
                </TabsList>
                <TabsContent value="tenants">
                    <PropertyTenantList />
                </TabsContent>
                <TabsContent value="units">
                    <UnitsList />
                </TabsContent>
            </Tabs>
        </>
    )
}