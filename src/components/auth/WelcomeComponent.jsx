import { IconUser, IconUserScreen, IconBuilding, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import {  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle, } from '../ui/item';
export default function WelcomeComponent(){
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
    return(
        <>
            <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                    {<div className="flex flex-col justify-center h-screen items-center text-center sm:items-start sm:text-left">
                     <div className='text-center'>
                        <h1 className="max-w-xs font-mono text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                            Welcome Back
                        </h1>
                        <p className="max-w-md font-sans text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                            Login as a
                        </p>
                     </div>
                    <div className='grid gap-4 py-4'>
                        {options.map((option)=> (
                        <Item variant="outline" size="sm" className="w-96" asChild>
                            <Link href={`/login?role=${option.role}`}>
                            <ItemMedia>
                                <option.icon className="size-5" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitle>
                                    <span className='font-sans'>{option.label}</span>
                                </ItemTitle>
                            </ItemContent>
                            <ItemActions>
                                <IconChevronRight className="size-4" />
                            </ItemActions>
                            </Link>
                        </Item>
                    ))}
                    </div>
                    
                    </div>}
                </main>
            </div>
        </>
    )
}