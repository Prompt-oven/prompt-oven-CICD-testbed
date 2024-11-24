import type { HTMLAttributes, ReactNode } from "react"
import * as React from "react"
import { cn } from "@/lib/utils.ts"

interface BadgeContainerProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode
	count?: number
}

function BadgeContainer({ children, count, ...props }: BadgeContainerProps) {
	const displayCount = count && count > 9 ? "9+" : count

	return (
		<div
			{...props}
			className={cn(
				"relative flex h-12 w-12 items-center justify-center",
				props.className,
			)}>
			{children}
			{count && count > 0 ? (
				<span className="absolute right-[0px] top-[0px] flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#A100F8] bg-[#A913F9] px-1 text-xs font-medium text-white">
					{displayCount}
				</span>
			) : null}
		</div>
	)
}

export default BadgeContainer
