import AddTenant from "@/components/agents/AddTenant"
import AddUnit from "@/components/agents/AddUnit"
import PropertyHeader from "@/components/agents/PropertyHeader"
import PropertyTenantList from "@/components/agents/PropertyTenantList"
import ToggleProperty from "@/components/agents/ToggleProperty"
import Addnew from "@/components/ui/add-new"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


export default function Property({params}){
    const property = {
        id:3,
        picture: "https://disqav.s3.eu-west-1.amazonaws.com/disqav/placeholder.png",
        name: 'Hannah Apartment',
        location: 'Limuru Town',
        landlord_id:2,
        landlord_name:'Joseph Mbugua'
    }
    
    return(
        <>
        <div className="lg:px-6 px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="font-sans md:py-4">{property.name}</h2>
                <div className="flex items-center gap-2">
                    <Addnew 
                        label="Add Tenant"
                        title="Add new Tenant"
                        description={`Add new Tenant to ${property.name}`}
                        fullwidth={false}
                    >
                        <AddTenant />
                    </Addnew>
                    <Addnew 
                        label="Add Unit"
                        title="Add new Unit"
                        description={`Add new Unit to ${property.name}`}
                        fullwidth={false}
                    >
                        <AddUnit />
                    </Addnew>
                </div>
            </div>
            <Separator className="my-2" />
            <PropertyHeader property={property} />
            <br />
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-sans font-medium">{property.name} Tenants</CardTitle>
                        <CardDescription className="font-sans">All Listed tenants</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ToggleProperty /> 
                    </CardContent>
                </Card> 
            </div>
        </div>
        </>
    )
}