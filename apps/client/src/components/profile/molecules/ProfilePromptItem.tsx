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
		<Card className="relative flex h-full w-full max-w-[400px] flex-col overflow-hidden rounded-md border-0 bg-[#111111] shadow-md">
			<div className="relative h-[220px] lg:h-[190px] xl:h-[220px]">
				<Image
					src={productInfo.thumbnailUrl}
					sizes="(max-width: 768px) 100vw, 1400px"
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

			<div className="relative flex h-[107px] flex-col gap-3 bg-[#3d2d50] p-4 pt-3">
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
	)
}
