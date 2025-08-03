import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { AppSidebar } from "./components/AppSidebar";
import { PageHeader } from "./components/PageHeader";
import SettingsModal from "./components/SettingsModal";
import SearchModal from "./components/SearchModal";
import HelpModal from "./components/HelpModal";

export const metadata: Metadata = {
  title: "Healsentra - Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <PageHeader />
        {children}

        <SettingsModal />
        <SearchModal />
        <HelpModal />
      </SidebarInset>
    </SidebarProvider>
  );
}
