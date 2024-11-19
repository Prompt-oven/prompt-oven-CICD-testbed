"use client"

import React, { type ComponentProps, useState } from "react"
import { ChevronUp } from "@repo/ui/lucide"
import SideMenuItem from "@/components/account/atom/SideMenuItem.tsx"
import { cn } from "@/lib/utils.ts"

type SideMenuToggleItemProps = ComponentProps<typeof SideMenuItem>

function SideMenuToggleItem(props: SideMenuToggleItemProps) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<SideMenuItem
			{...props}
			onClick={() => setIsOpen(!isOpen)}
			suffix={
				<ChevronUp
					className={cn(
						"h-5 w-5 text-white transition-transform",
						isOpen ? "rotate-0" : "rotate-180",
					)}
				/>
			}
		/>
	)
}

export default SideMenuToggleItem
