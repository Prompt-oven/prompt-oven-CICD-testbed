import type { ProfileMemberInfoType } from "@/types/profile/profileTypes"
import ProfileModifyInfo from "../organisms/ProfileModifyInfo"
import ProfileModifyTitle from "../atoms/ProfileModifyTitle"

interface ProfileModifyTemplateProps {
	memberData: ProfileMemberInfoType
}

export default function ProfileModifyTemplate({
	memberData,
}: ProfileModifyTemplateProps) {
	return (
		<section className="sm:m-18 sm:mx-18 mx-6 mt-12 w-full max-w-screen-2xl lg:mx-24 xl:mx-32">
			<ProfileModifyTitle />
			<ProfileModifyInfo memberData={memberData} />
		</section>
	)
}
