'use client'
import {  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator, } from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useSidebar } from "../ui/sidebar";
import { IconLayoutSidebar } from '@tabler/icons-react';
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link";
import { Fragment } from "react";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const path = usePathname();
  const list = path.split('/');
  console.log(list);
  return (
      <>
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              {list.map((link)=> (
                <Fragment key={link}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={`/account/${list[2]}/${link}`}>{link}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
              ))}
            
            </BreadcrumbList>
        </Breadcrumb>
        </div>
        <div className="ml-auto flex items-center gap-2">
          
        </div>
      </div>
    </header>
      </>
  )
}