import PromptDetailLinkSellor from "../atoms/PromptDetailLinkSellor"
import PromptDetailSellorFollow from "../atoms/PromptDetailSellorFollow"

interface PromptDetailSellorProps {
	memberNickname: string | undefined
	memberProfileImage: string | undefined
}

export default function PromptDetailSellor({
	memberNickname,
	memberProfileImage,
}: PromptDetailSellorProps) {
	return (
		<div className="flex items-center justify-start gap-4">
			<PromptDetailLinkSellor
				memberNickname={memberNickname}
				memberProfileImage={memberProfileImage}
			/>

			<PromptDetailSellorFollow />
		</div>
	)
}
