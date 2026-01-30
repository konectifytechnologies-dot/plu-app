import Image from "next/image";
import { Button } from "@/components/ui/button";
import {  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,  } from "@/components/ui/item";
import { IconUser, IconUserScreen, IconBuilding, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle, } from "@/components/ui/card";

export default function Home() {
  const options = [
        {
            icon:IconUserScreen,
            label: 'Agent',
            role: 'agent'
        },
         {
            icon:IconBuilding,
            label: 'Land Lord',
            role: 'land_lord'
        },
         {
            icon:IconUser,
            label: 'Tenant',
            role: 'tenant'
        }
    ]
  return (
    <>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="flex w-full max-w-sm flex-col gap-6">
            <a href="#" className="flex items-center gap-2 self-center font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                
              </div>
              PLU Developers
            </a>
            <div className='grid gap-4 py-4'>
            <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>
                      Login in as a
                    </CardDescription>
                  </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {options.map((option)=> (
                      <Item variant="outline" size="sm" asChild>
                          <Link href={`/auth/login?role=${option.role}`}>
                              <ItemMedia><option.icon className="size-5" /></ItemMedia>
                              <ItemContent><ItemTitle>{option.label}</ItemTitle></ItemContent>
                              <ItemActions><IconChevronRight className="size-4" /></ItemActions>
                          </Link>
                      </Item>
                    ))}
                  </div>
              </CardContent>
            </Card>
          </div>
          </div>
        </div>

    </>
  );
}
