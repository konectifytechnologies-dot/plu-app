import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '../ui/badge';
import AddUnit from './AddUnit';
import Addnew from '../ui/add-new';

export default function UnitsList(){
    const units = [
        {
            id:1,
            name:'F1',
            rent:10000,
            status:'Occupied'
        },
         {
            id:2,
            name:'F2',
            rent:10000,
            status:'Vacant'
        },
         {
            id:2,
            name:'F1',
            rent:10000,
            status:'Occupied'
        },

    ]
    return(
        <>
            <Table>
                <TableHeader>
                    <TableRow className="border-b hover:bg-transparent">
                    <TableHead className="h-12 px-4 font-medium">Unit</TableHead>
                    <TableHead className="h-12 px-4 font-medium">Rent</TableHead>
                    <TableHead className="h-12 px-4 font-medium">Status</TableHead>
                    <TableHead className="h-12 px-4 font-medium">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {units.map((item)=> {
                        const isActive = item.status === 'Occupied'
                        return(
                            <TableRow key={item.id} className="hover:bg-muted/50">
                                <TableCell className="h-14 px-4 font-sans text-sm font-medium">{item.name}</TableCell>
                                <TableCell className="h-14 px-4 font-medium font-sans">Kes {item.rent}</TableCell>
                                <TableCell className="h-14 px-4 font-medium font-sans">
                                    {isActive ? 
                                        <>
                                            <Badge
                                                variant="secondary"
                                                className="bg-blue-500 text-white dark:bg-blue-600"
                                            >
                                                {item.status}
                                            </Badge>
                                        </>
                                        :
                                        <>
                                            <Badge variant="destructive">{item.status}</Badge>
                                        </>
                                    }
                                </TableCell>
                                <TableCell className="h-14 px-4 font-medium font-sans">
                                    <div>
                                        <Addnew 
                                            label="Edit"
                                            title="Edit Unit"
                                            description="Edit this unit"
                                            fullwidth={false}
                                        >
                                            <AddUnit initialData={item} />
                                        </Addnew>
                                    </div>
                                </TableCell>
                            </TableRow> 
                        )
                    })}
                </TableBody>
            </Table>
        
        </>
    )
}