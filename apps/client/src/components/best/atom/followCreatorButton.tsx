import React from "react"
import { UserPlus } from "@repo/ui/lucide"
import { Button } from "@repo/ui/button"

function FollowCreatorButton() {
	return (
		<Button
			variant="ghost"
			className="absolute right-2 top-2 text-white hover:bg-white/20">
			<UserPlus size={500} className="h-100 w-100" />
			<span className="sr-only">Follow user</span>
		</Button>
	)
}

export default FollowCreatorButton
