import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"
import ProfileAvatar from "../atoms/info/ProfileAvatar"
import ProfileBanner from "../atoms/info/ProfileBanner"
import ProfileInfoLeft from "../molecules/ProfileInfoLeft"
import ProfileInfoRight from "../molecules/ProfileInfoRight"

interface MemberDataProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileMemberInfo({ memberData }: MemberDataProps) {
	return (
		<div className="h-[350px] xl:h-[400px]">
			<ProfileBanner memberBanner={memberData.bannerImageUrl} />
			<div className="relative -top-[6.5rem] z-[5] mx-10 mt-10 flex h-24 items-center justify-between gap-4 md:h-40 xl:-top-[7.5rem] xl:h-44">
				<ProfileAvatar memberAvatar={memberData.avatarImageUrl} />

				<div className="mt-[90px] flex h-[175px] flex-grow justify-between gap-2 rounded-xl bg-gradient-to-r from-[#B514F1] to-[#0BA9FF] p-4 md:mt-0 md:h-[90%] md:items-center md:p-8">
					<ProfileInfoLeft memberData={memberData} />
					<ProfileInfoRight memberData={memberData} />
				</div>
			</div>
		</div>
	)
}
