import { uploadImage } from "@/action/s3/s3UploadAction"

export const handleImageUpload = async (
	formData: FormData,
	imageKey: string,
	currentImageUrl: string,
) => {
	const uploadImageUrl = formData.get(imageKey) as string | undefined

	if (uploadImageUrl !== undefined && uploadImageUrl !== currentImageUrl) {
		const result = await uploadImage(uploadImageUrl, "profile")
		if (result.isSuccess) {
			formData.set(imageKey, result.responseImageUrl as string)
		} else {
			// eslint-disable-next-line no-alert -- Comments to notify you of failed image upload
			alert("이미지 업로드에 실패하였습니다.")
			return false // 업로드 실패 시 false 반환
		}
	}
	return true // 성공 시 true 반환
}
