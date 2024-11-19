import { getProfileMemberInfo } from "@/action/profile/getProfileData"
import ProfileModifyTemplate from "@/components/profile-modify/templates/ProfileModifyTemplate"

export default async function ProfileModify() {
	const memberData = await getProfileMemberInfo()

	return (
		<main className="flex min-h-screen justify-center overflow-auto bg-[#111111] py-1">
			<ProfileModifyTemplate memberData={memberData} />
		</main>
	)
}
