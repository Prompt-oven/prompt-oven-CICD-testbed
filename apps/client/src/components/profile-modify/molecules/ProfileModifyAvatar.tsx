import Image from "next/image"
import React from "react"

interface ProfileAvatarProps {
	memberAvatar?: string | undefined
}

export default function ProfileModifyAvatar({
	memberAvatar,
}: ProfileAvatarProps) {
	return (
		<div className="relative aspect-square h-full rounded-xl border-2 border-white bg-[#1b1b1b]">
			{memberAvatar ? (
				<Image
					src={memberAvatar}
					sizes="(max-width: 768px) 100vw, 360px"
					fill
					alt="avatar"
					priority
				/>
			) : null}
		</div>
	)
}
