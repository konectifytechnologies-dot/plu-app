import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/sidebar/site-header";


export default  function AgentLayout({params, children}){
    
    return(
        <>
            <SidebarProvider
                style={
                    {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                    } 
                }
            >
                <AppSidebar variant="inset" />
                <SidebarInset>
                    <SiteHeader />
                    <div className="flex flex-1 flex-col">
                        <div className="@container/main flex flex-1 flex-col gap-2">
                            <div className="flex flex-col px-4 lg:px-6 gap-4 py-4 md:gap-6 md:py-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
            {/*<div className="[--header-height:calc(--spacing(14))]">
                <SidebarProvider className="flex flex-col">
                    <SiteHeader />
                    <div className="flex flex-1">
                        <AppSidebar />
                        <SidebarInset>
                            <div className="px-10 py-4 md:px-36">
                                
                            </div>
                        </SidebarInset>
                    </div>
                </SidebarProvider>
            </div> */}
        </>
    )
}