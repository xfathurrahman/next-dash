'use client';

// Import React, useState, and useEffect
import React, { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import {
    LayoutDashboard,
    Users2,
    File,
    Settings2,
    ChevronRight,
} from 'lucide-react';
import { Nav } from '@/components/ui/nav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Import your logo image
import Logo from '@/public/755.jpg';

export default function SideNavbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Use useEffect to update the state only on the client side
    useEffect(() => {
        setIsCollapsed(mobileWidth);
    }, [mobileWidth]);

    return (
        <div className="relative min-w-[80px] border-r px-3 pt-6">

            <Image
                width={60}
                height={60}
                src={Logo}
                alt="Logo"
                className="rounded-full mx-auto"
            />

            {/* Toggle button */}
            <div className="absolute right-[-20px] top-7">
                <Button
                    className="rounded-full p-2"
                    variant="secondary"
                    onClick={toggleSidebar}>
                    <ChevronRight className="w-6 h-6"/>
                </Button>
            </div>

            <hr />

            <Nav
                isCollapsed={isCollapsed}
                links={[
                    {
                        title: 'Dashboard',
                        href: '/dashboard',
                        label: '',
                        icon: LayoutDashboard,
                        variant: 'default',
                    },
                    {
                        title: 'Posts',
                        href: '/posts',
                        label: '',
                        icon: File,
                        variant: 'ghost',
                    },
                    {
                        title: 'Users',
                        href: '/users',
                        label: '18',
                        icon: Users2,
                        variant: 'ghost',
                    },
                    {
                        title: 'Settings',
                        href: '/settings',
                        label: '',
                        icon: Settings2,
                        variant: 'ghost',
                    },
                ]}
            />
        </div>
    );
}