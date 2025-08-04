"use client";

import * as React from "react";
import {
  IconAdjustments,
  IconChartBar,
  IconFirstAidKit,
  IconFolder,
  IconHome,
  IconUsers,
  IconUsersGroup,
  IconUsersPlus,
} from "@tabler/icons-react";
import { NavMain } from "./NavMain";
import { NavSecondary } from "./NavSecondary";
import { NavUser } from "./NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavManage from "./NavManage";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export const sidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconHome,
    },
    {
      title: "Patients",
      url: "/dashboard/patients",
      icon: IconUsers,
    },
    {
      title: "Appointments",
      url: "/dashboard/appointments",
      icon: IconAdjustments,
    },
    {
      title: "Doctors",
      url: "/dashboard/doctors",
      icon: IconUsersPlus,
    },
    {
      title: "Inventory",
      url: "/dashboard/inventory",
      icon: IconFolder,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: IconChartBar,
    },
  ],
  manage: [
    {
      title: "User Management",
      url: "/dashboard/users",
      icon: IconUsersGroup,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent active:bg-transparent focus:bg-transparent w-fit"
            >
              <a href="">
                <Image
                  src={logo}
                  alt="Healsentra Logo"
                  width={32}
                  height={32}
                  className="size-8"
                />
                <span className="text-2xl font-extrabold italic">
                  Healsentra
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        <NavManage items={sidebarData.manage} />
        <NavSecondary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
