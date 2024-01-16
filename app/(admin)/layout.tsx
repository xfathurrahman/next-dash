import React from "react";

import SideNavbar from "@/components/sideNavbar";

export default function DashboardLayout ({ children, }: { children: React.ReactNode
}) {
    return (
        <>
            <SideNavbar />
            <div className="p-8 w-full">
                { children }
            </div>
        </>
    )
}