import {
	getProfileList,
	getProfileMemberInfo,
} from "@/action/profile/getProfileData"
import ProfileTemplate from "@/components/profile/templates/ProfileTemplate"

export default async function Profile() {
	const memberData = await getProfileMemberInfo()
	const listData = await getProfileList()

	return (
		<main className="bg-[#111111] py-1">
			<ProfileTemplate memberData={memberData} listData={listData} />
		</main>
	)
}
