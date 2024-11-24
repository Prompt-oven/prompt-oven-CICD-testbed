"use client"

import * as React from "react"
import { Bell } from '@repo/ui/lucide'
import { Button } from "@repo/ui/button"
import { cn } from "@/lib/utils"

interface NotificationButtonProps {
	count?: number
	className?: string
}

export function NotificationButton({ count, className }: NotificationButtonProps) {
	const displayCount = count && count > 9 ? "9+" : count

	return (
		<Button
			variant="ghost"
			size="icon"
			className={cn("relative w-[48px] h-[48px]", className)}
		>
			<Bell className="w-6 h-6 text-[#C3C3C3]" strokeWidth={2} />
			{count && count > 0 ? (
				<span className="absolute right-[10px] top-[10px] flex items-center justify-center min-w-[20px] h-[20px] text-xs font-medium text-white bg-[#A913F9] border-2 border-[#A100F8] rounded-full px-1">
          {displayCount}
        </span>
			) : null}
		</Button>
	)
}