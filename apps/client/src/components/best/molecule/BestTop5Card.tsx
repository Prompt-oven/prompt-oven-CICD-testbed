"use client"
import React from "react"
import { BestCreatorDataTypes } from "@/types/best/bestTypes"
import Image from "next/image"
import FollowCreatorButton from "@/components/best/atom/FollowCreatorButton"
import { Card } from "@repo/ui/card"
import { ArrowDown, ArrowUp } from "@repo/ui/lucide"

interface BestCardProps extends BestCreatorDataTypes {
	name: string
	rank: number
	image: string
	rankChange?: number
	creatorTag?: string
}

function BestTop5Card({
	name = "Creator Name",
	rank = 1,
	rankChange = 2,
	creatorTag = "Creator Tag",
}: BestCardProps) {
	return (
		<Card className="relative h-[360px] w-[280px] border-none bg-gradient-to-br from-purple-700 to-fuchsia-900 text-white">
			<div className="flex items-center gap-2">
				<div className="flex items-center gap-2 rounded-full bg-purple-600/50 px-4 py-1 text-sm font-medium">
					<span className="text-lg font-semibold">#{rank}</span>
					{rankChange !== 0 && (
						<div className="flex items-center text-xs">
							{rankChange > 0 ? (
								<div className="font-xs flex items-center text-green-600">
									<ArrowUp className="h-4 w-4" />
									<span>{Math.abs(rankChange)}</span>
								</div>
							) : (
								<div className="font-xs flex items-center text-red-600">
									<ArrowDown className="h-4 w-4" />
									<span>{Math.abs(rankChange)}</span>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			<FollowCreatorButton />

			<div className="flex h-full flex-col items-center justify-center gap-4 p-6 pt-0">
				{/* Profile Image with Wings Background */}
				<div className="relative">
					<div className="absolute inset-0 -z-10">
						<Image
							src=""
							alt="Decorative wings"
							width={160}
							height={120}
							className="object-contain opacity-80"
						/>
					</div>
					<div className="h-100 w-100 overflow-hidden border-2 border-white/20">
						<Image
							src="/img/main/art1.png"
							alt="Profile picture"
							width={100}
							height={100}
							className="object-cover"
						/>
					</div>
				</div>

				{/* User Info */}
				<div className="flex flex-col gap-2 text-center">
					<h2 className="text-2xl font-bold">{name}</h2>
					<span className="rounded-full bg-purple-600/50 px-4 py-1 text-sm font-medium text-white/80">
						{creatorTag}
					</span>
				</div>
			</div>
		</Card>
	)
}

export default BestTop5Card
