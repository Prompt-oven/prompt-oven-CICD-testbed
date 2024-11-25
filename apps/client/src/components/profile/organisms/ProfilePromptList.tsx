"use client"

import type { ProfileListCardType } from "@/types/profile/profileTypes"
import ProfilePromptItem from "../molecules/ProfilePromptItem"
import ProfileLoadMore from "../atoms/ProfileLoadMore"

interface ProfileListProps {
	listData: ProfileListCardType[]
	// initialData: {
	// 	items: ProfileListCardType[] // 초기 데이터
	// 	nextCursor: string | null // 다음 커서
	// }
}

export default function ProfilePromptList({ listData }: ProfileListProps) {
	return (
		<div>
			<ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{listData.length > 0
					? listData.map((item) => (
							<ProfilePromptItem key={item.productUUID} productInfo={item} />
						))
					: null}
			</ul>

			<ProfileLoadMore />
		</div>
	)
}
