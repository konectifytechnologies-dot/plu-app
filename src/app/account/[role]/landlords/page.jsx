import AddLandlord from "@/components/agents/AddLandlord"
import { Separator } from "@/components/ui/separator";
import Addnew from "@/components/ui/add-new";

export default function Landlords(){
    const landlords = [
        {
            name:'John Doe',
            email:'swazicreatives@gmail.com',
            number: '0705180969'
        }
    ]
    return(
        <>
            
            <div>
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-2">
                    <h2 className="font-sans text-base">Landlords</h2>
                    <Addnew
                        label="Add Landlord"
                        title="Add Landlord"
                        description="Add a new Landlord"
                        fullwidth={false}
                    >
                        <AddLandlord />
                    </Addnew>
                </div>
                <Separator className="my-2" />
            </div>
         
        </>
    )
}