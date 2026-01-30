import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IconHome, IconBuilding, IconCategory } from "@tabler/icons-react"

export default function PropertyHeader({property}){
    const params = [
        {
            id:1,
            label:'Total Number of Units',
            value:30,
            icon:IconHome
        },
        {
            id:2,
            label: 'Total Occupied',
            value:20,
            icon:IconBuilding
        },
        {
            id:3,
            label:'Total Vacant',
            value:10,
            icon:IconCategory
        }
    ]
    return(
        <>
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-3 @5xl/main:grid-cols-3">
                {params.map((card)=> {
                    return(
                        <Card key={card.label}>
                            <CardHeader className="grow">
                                <div className="grid grid-cols-5 items-center gap-2">
                                    <div className="bg-purple-100 h-20 w-20 rounded-full grid place-items-center">
                                        <card.icon size={28} className="text-primary" />
                                    </div>
                                    <div className="col-span-4">
                                        <CardDescription className="font-sans">{card.label}</CardDescription>
                                        <CardTitle className="text-2xl font-sans font-semibold tabular-nums @[250px]/card:text-3xl">
                                            {card.value} <small className="font-sans text-muted-foreground text-xs">Units</small>
                                        </CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    )
                })}      
            </div>
        </>
    )
}