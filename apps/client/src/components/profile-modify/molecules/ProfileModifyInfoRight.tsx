import { formatFollowers } from "@/lib/utils"

interface MemberRightProps {
	bio: string | undefined
	following: number
	follower: number
	viewer: number
	sales: number
}

export default function ProfileModifyInfoRight({
	bio,
	following,
	follower,
	viewer,
	sales,
}: MemberRightProps) {
	const formattedFollowing = formatFollowers(following)
	const formattedFollower = formatFollowers(follower)

	return (
		<div className="custom-scrollbar flex flex-grow overflow-auto">
			<div className="flex w-full flex-col gap-1">
				<div className="h-16 w-full rounded-lg bg-white/40 text-sm text-white">
					<p className="mx-2 py-1">
						<span className="line-clamp-3 text-[12px]">
							{bio ? bio : "자기소개가 없습니다."}
						</span>
					</p>
				</div>
				<div className="flex w-full flex-none flex-grow rounded-lg bg-white/40 p-3 md:p-2">
					<div className="grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
						<div className="flex min-w-0 items-center justify-center gap-1 md:flex-col">
							<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
								Following
							</span>
							<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
								{formattedFollowing}
							</span>
						</div>
						<div className="flex min-w-0 items-center justify-center gap-1 md:flex-col">
							<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
								Follower
							</span>
							<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
								{formattedFollower}
							</span>
						</div>
						<div className="flex min-w-0 items-center justify-center gap-1 md:flex-col">
							<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
								Viewer
							</span>
							<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
								{viewer.toLocaleString()}
							</span>
						</div>
						<div className="flex min-w-0 items-center justify-center gap-1 md:flex-col">
							<span className="font-mulish text-gray-200 md:text-sm xl:text-base 2xl:text-xl">
								Sales
							</span>
							<span className="font-mulish text-[10px] font-bold text-white xl:text-xs 2xl:text-sm">
								{sales.toLocaleString()}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
