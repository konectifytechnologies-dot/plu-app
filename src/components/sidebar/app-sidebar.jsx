import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { User } from "../auth/User"
import { NavMain } from "./nav-main"
import { NavDocuments } from "./nav-secondary"

export function AppSidebar({ ...props }) {
  return (
    <>
      <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                
                <span className="text-base font-semibold">PLU Developers.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavDocuments />
      </SidebarContent>
      <SidebarFooter>
        <User />
      </SidebarFooter>
    </Sidebar>
    </>
  )
}