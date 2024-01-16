'use client';

import React, { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { motion, AnimatePresence } from 'framer-motion';

import {
    LayoutDashboard,
    Users2,
    File,
    Settings2,
    ChevronRight,
    ChevronLeft,
} from 'lucide-react';
import { Nav } from '@/components/ui/nav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import Logo from '@/public/755.jpg';

export default function SideNavbar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onlyWidth = useWindowWidth();
    const mobileWidth = onlyWidth < 768;

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        setIsCollapsed(mobileWidth);
    }, [mobileWidth]);

    return (
        <div className={`relative min-w-${isCollapsed ? '16' : '120'} border-r px-3 pt-6 transition-all duration-300`}>
            <Image
                priority
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
                    onClick={toggleSidebar}
                >
                    <AnimatePresence>
                        {isCollapsed ? (
                            <motion.div
                                key="chevron-left"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chevron-right"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
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