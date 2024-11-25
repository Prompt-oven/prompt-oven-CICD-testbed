import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar"
import { ReviewDateFormatted } from "@/lib/utils"
import PromptDetailReviewLine from "../../atoms/review/PromptDetailReviewLine"

interface PromptDetailReviewContentProps {
	memberNickname: string
	memberProfileImage: string | undefined
	updatedAt: string
	content: string
}

export default function PromptDetailReviewContent({
	memberNickname,
	memberProfileImage,
	updatedAt,
	content,
}: PromptDetailReviewContentProps) {
	const formDate = ReviewDateFormatted(updatedAt)

	return (
		<li className="rounded-md bg-[#1b1b1b]">
			<div className="min-h-[140px]">
				<Link
					href={`/profile/${memberNickname}`}
					className="ml-5 mt-2 flex items-center gap-4 lg:ml-10 lg:mt-4">
					<Avatar className="h-6 w-6 lg:h-8 lg:w-8">
						<AvatarImage src={memberProfileImage} alt={memberNickname} />
						<AvatarFallback>AU</AvatarFallback>
					</Avatar>
					<p className="mt-1 text-base font-bold lg:text-xl">
						{memberNickname}
					</p>
					<p className="mx-3 mt-2 text-xs text-[#848898] lg:mx-6 lg:mt-3 lg:text-sm">
						{formDate}
					</p>
				</Link>
				<PromptDetailReviewLine content={content} />
			</div>
		</li>
	)
}
