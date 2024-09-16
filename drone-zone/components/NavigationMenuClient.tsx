'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Plane, Users, BookOpen, ShoppingBag } from 'lucide-react';

export default function NavigationMenuClient() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible((prev) => !prev);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span className="text-xl font-bold">DronePilotHub</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger onClick={toggleContentVisibility}>
            Info
          </NavigationMenuTrigger>
          
          {isContentVisible && (
            <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <li className="row-span-3">
                <NavigationMenuLink asChild>
                    <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    href="/"
                    >
                    {/* <Plane className="h-6 w-6" /> */}
                    <div className=" text-sm font-bold leading-none">Drone Pilot Resources</div>
                    <p className="text-sm leading-tight text-white">
                        Comprehensive information for drone pilots of all levels.
                    </p>
                    </a>
                </NavigationMenuLink>
                </li>
                <li>
                <NavigationMenuLink asChild>
                    <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    href="/"
                    >
                    <div className="text-sm font-bold leading-none">Regulations</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white">
                        Stay updated with the latest drone regulations and laws.
                    </p>
                    </a>
                </NavigationMenuLink>
                </li>
                <li>
                <NavigationMenuLink asChild>
                    <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    href="/"
                    >
                    <div className="text-sm font-bold leading-none">Flight Techniques</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white">
                        Learn advanced flight techniques and maneuvers.
                    </p>
                    </a>
                </NavigationMenuLink>
                </li>
                <li>
                <NavigationMenuLink asChild>
                    <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    href="/"
                    >
                    <div className="text-sm font-bold leading-none">Safety Guidelines</div>
                    <p className="line-clamp-2 text-sm leading-snug text-white">
                        Essential safety guidelines for responsible drone operation.
                    </p>
                    </a>
                </NavigationMenuLink>
                </li>
            </ul>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/practice-exams" legacyBehavior passHref>
            <NavigationMenuLink className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Practice Exams</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/shop" legacyBehavior passHref>
            <NavigationMenuLink className="flex items-center space-x-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Shop</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}