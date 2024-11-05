import {
	getProfile,
	getReviewAndFollowCount,
} from "@/action/profile/getProfileData"
import ProfileTemplate from "@/components/profile-demo/templates/ProfileTemplate"

export default async function ProfileDemo() {
	const reviewAndFollowCount = await getReviewAndFollowCount()
	const profileData = await getProfile()

	return (
		<main className="bg-[#111111] py-10">
			<section className="m-auto max-w-[1056px] px-2">
				<ProfileTemplate
					reviewAndFollowCount={reviewAndFollowCount}
					profileData={profileData}
				/>
			</section>
		</main>
	)
}