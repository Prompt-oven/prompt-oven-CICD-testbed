"use client"

import React, { useState } from "react"
import { UserPlus, UserCheck } from "@repo/ui/lucide"
import { Button } from "@repo/ui/button"

interface FollowCreatorButtonProps {
	initialFollowed?: boolean
	_memberUUID?: string
}

function FollowCreatorButton({
	initialFollowed = false,
	_memberUUID = "test",
}: FollowCreatorButtonProps) {
	const [followed, setFollowed] = useState(initialFollowed)
	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		// const result = await followAction(memberUUID);
		setFollowed((prev) => !prev) // 상태 토글
	}
	return (
		<Button
			variant="ghost"
			className="h-auto w-auto p-2 text-white hover:bg-white/20"
			onClick={handleClick}>
			{followed ? (
				<UserCheck className="!h-[1.4rem] !w-[1.4rem]" />
			) : (
				<UserPlus className="!h-[1.4rem] !w-[1.4rem]" />
			)}
			<span className="sr-only">
				{followed ? "Unfollow user" : "Follow user"}
			</span>
		</Button>
	)
}

export default FollowCreatorButton
