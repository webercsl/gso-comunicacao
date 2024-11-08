import { usePathname } from "next/navigation";
import { Bell, Home, MessagesSquare, MoreHorizontal } from "lucide-react";

import { UserButton } from "@/features/auth/components/user-button";

import { SidebarButton } from "./sidebar-button";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-[70px] h-full bg-[#19302B] flex flex-col gap-y-4 items-center pt-[9px] pb-4 shadow-[0_0_10px_#000] z-[10]">
            <WorkspaceSwitcher />
            <SidebarButton icon={Home} label="Home" isActive={pathname.includes("/workspace")} />
            <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
            <UserButton />
            </div>
        </aside>
    );
};