"use client"

import * as React from "react"
import Link from "next/link"
// import * as NavigationMenu from "@radix-ui/react-navigation-menu"
// import { cn } from "@/lib/utils"
// // import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex cursor-pointer flex-row items-center justify-center space-x-5">
      <NavigationMenuList className="text-5xl space-x-5">
        <NavigationMenuItem className="text-5xl">
          <Link href="#" className="text-5xl">
            <NavigationMenuLink className="text-3xl font-bold tracking-tighter">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref className="text-5xl">
            <NavigationMenuLink className="text-3xl font-bold tracking-tighter">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={`navigationMenuTriggerStyle()
            text-3xl font-bold tracking-tighter
            `}
            >
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink
              className={`navigationMenuTriggerStyle() text-3xl font-bold tracking-tighter`}
            >
              Uses
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    // <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    //   <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
    //     <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
    //       <NavigationMenu.Item>
    //         <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
    //         <NavigationMenu.Content>Item one content</NavigationMenu.Content>
    //       </NavigationMenu.Item>
    //       <NavigationMenu.Item>
    //         <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
    //         <NavigationMenu.Content>Item two content</NavigationMenu.Content>
    //       </NavigationMenu.Item>
    //     </NavigationMenu.List>

    //     {/* NavigationMenu.Content will be rendered here when active */}
    //     <NavigationMenu.Viewport />
    //   </NavigationMenu.Root>
    // </section>
  )
}
