'use client'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { IconHome, IconUsers,IconBuilding,IconWindow,IconWallet,  IconHammer, IconUser, IconMail } from '@tabler/icons-react';
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

export function NavMain(){
  const path = usePathname();
  const list = path.split('/');
  const params = useParams();
  const role = params.role
  const isAgent = role === 'agent';
   const links = [
      {
      name: "Home",
      slug: 'dashboard',
      icon: IconHome,
      display:true
    },
    {
      name: "Landlords",
      slug: "landlords",
      icon: IconUsers,
      display:isAgent ,
    },
    {
      name: "Properties",
      slug: "properties",
      icon: IconBuilding,
      display:isAgent
    },
    {
      name: "Tenants",
      slug: "tenants",
      icon: IconWindow,
      display:isAgent,
    },
  ];

    return(
        <>
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
           
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {links.map((item) => {
            const isActive = list.includes(item.name.toLowerCase())
            const url = item.slug === 'dashboard' ? `/account/${role}/` : `/account/${role}/${item.slug}`;
            if(!item.display){ return <></>}
            return(
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton tooltip={item.name} className={cn('', isActive && 'bg-blue-600 text-white')} asChild>
                  <Link href={url} >
                      {item.icon && <item.icon />}
                      <span className="font-sans">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
        </>
    )
}