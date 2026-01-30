"use client"
import {
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash,
  IconRippleDown,
  IconMoneybag,
  IconSettings
} from "@tabler/icons-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { useParams } from "next/navigation";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function NavDocuments() {
  const { isMobile } = useSidebar();
  const {role} = useParams();
  const links = [
    {
      name: "Payments",
      url: "#",
      icon: IconMoneybag,
    },
    {
      name: "Repairs",
      url: "#",
      icon: IconSettings,
    },
    {
      name: 'Utilities',
      url: `/account/${role}/utilities`,
      icon:IconRippleDown
    }
  ]
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Financials</SidebarGroupLabel>
      <SidebarMenu>
        {links.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span className="font-sans">{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}

        <SidebarMenuItem>
            <SidebarMenuButton onClick={()=>signOut({ callbackUrl: 'http://localhost:3000/auth/login' })}>
              <LogOut />
              Log-out
            </SidebarMenuButton>
          </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}