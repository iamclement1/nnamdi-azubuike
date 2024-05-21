"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Settings } from "lucide-react";
import Image from "next/image";
import { BackOfficeNavItem } from "@/utils/data";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/back-office"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Image src="/favicon.svg" alt="logo" width={100} height={100} />
          </Link>
          {BackOfficeNavItem.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8",
                    {
                      "bg-black text-white": pathname === item.href,
                      "text-muted-foreground hover:text-foreground":
                        pathname !== item.href,
                    },
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.tooltip}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.tooltip}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8",
                  {
                    "bg-black text-white": pathname === "/settings",
                    "text-muted-foreground hover:text-foreground":
                      pathname !== "/settings",
                  },
                )}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </aside>
  );
};

export default Sidebar;
