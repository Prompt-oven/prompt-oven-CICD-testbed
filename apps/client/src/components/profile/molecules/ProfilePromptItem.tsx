import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "@repo/ui/lucide"
import { Card } from "@repo/ui/card"
import { Badge } from "@repo/ui/badge"
import { Button } from "@repo/ui/button"
import StarRate from "@repo/ui/rating-read-only"
import type { ProfileListCardType } from "@/types/profile/profileTypes"
import { PromptCardDateFormatted, PromptIsNew } from "@/lib/utils"

interface ProfileCardProps {
	productInfo: ProfileListCardType
}

export default function ProfilePromptItem({ productInfo }: ProfileCardProps) {
	const formattedDate = PromptCardDateFormatted(productInfo.productRegistDate)
	const isNew = PromptIsNew(productInfo.productRegistDate)

	return (
		<li className="flex justify-center">
			<Link href="/prompt-detail/1">
				<Card className="xs:w-[220px] relative flex w-[150px] flex-col overflow-hidden rounded-md border-0 bg-[#111111] shadow-md">
					<div className="xs:h-[300px] relative h-[200px]">
						<Image
							src={productInfo.thumbnailUrl}
							sizes="100vw"
							fill
							priority
							alt="Cyberpunk character"
						/>
						<Badge className="absolute left-4 top-4 border-0 bg-gradient-to-r from-[#A913F9] to-[#3F5EFB] font-bold hover:from-[#A913F9] hover:to-[#3F5EFB]">
							{isNew ? "NEW" : formattedDate}
						</Badge>
						<Button
							size="icon"
							className="absolute bottom-[-16px] right-3 z-10 h-8 w-8 rounded-full bg-[#AD20F2] shadow-lg shadow-[#514FD7]/40 hover:bg-[#AD20F2]/90">
							<ShoppingCart className="h-6 w-6" />
						</Button>
					</div>

					<div className="relative flex h-[110px] flex-col gap-3 bg-[#3d2d50] p-4 pt-3">
						<StarRate value={productInfo.productStar} />

						<div className="ml-1 space-y-1">
							<h3 className="font-lato text-balance font-semibold text-white">
								{productInfo.productName}
							</h3>
							<p className="font-lato text-xs text-[#827682]">
								{productInfo.categoryName}
							</p>
						</div>

						<span className="font-lato absolute bottom-2 right-3 text-balance text-white">
							{productInfo.productPrice.toLocaleString()}$
						</span>
					</div>
				</Card>
			</Link>
		</li>
	)
}
