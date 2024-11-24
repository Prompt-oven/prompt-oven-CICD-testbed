import type { ComponentProps } from "react"
import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils.ts"
import type { MenuIconType } from "@/lib/navigation.ts"

interface SideMenuItemProps extends ComponentProps<typeof Link> {
	view: string
	label: string
	activeRoute: string
	Icon: MenuIconType
}

function SideMenuItem({
	label,
	Icon,
	activeRoute,
	view,
	...props
}: SideMenuItemProps) {
	return (
		<Link
			{...props}
			className={cn(
				"flex h-[60px] items-center justify-between rounded-lg px-5 py-4 transition-colors hover:!bg-white/10",
				view.includes(activeRoute) ? "text-[#E2ADFF]" : "text-white",
				props.className,
			)}>
			<div className="flex items-center gap-3">
				<Icon className={cn("h-6 w-6")} />
				<span>{label}</span>
			</div>
		</Link>
	)
}

export default SideMenuItem
