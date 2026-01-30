import Addutility from "@/components/agents/AddUtility"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
export default function Utilities(){
    return(
        <>
         <Card>
            <CardHeader>
                <CardTitle>Add Water Reading</CardTitle>
                <CardDescription>Add a new water reading </CardDescription>
            </CardHeader>
            <CardContent>
                <Addutility />
            </CardContent>
         </Card>
         <br />
        </>
    )
}