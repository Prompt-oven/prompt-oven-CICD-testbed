import {
	GetObjectCommand,
	PutObjectCommand,
	S3Client,
} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const Bucket = process.env.BUCKET
const s3 = new S3Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
	},
})

// 이미지 저장
export async function POST(req: Request) {
	try {
		const formData = await req.formData()
		const files = formData.getAll("img") as File[]
		const keyword = formData.get("keyword") as string

		const Body = (await files[0].arrayBuffer()) as Buffer

		await s3.send(
			new PutObjectCommand({
				Bucket,
				Key: `dummy/${keyword}/${files[0].name}`,
				Body,
				ContentType: "image/png",
			}),
		)

		// 서명된 URL 생성
		const signedUrl = await getSignedUrl(
			s3,
			new GetObjectCommand({
				Bucket,
				Key: `dummy/${keyword}/${files[0].name}`,
			}),
			{ expiresIn: 3600 },
		)

		return Response.json({ message: "OK", url: signedUrl })
	} catch (error) {
		return Response.error()
	}
}
