import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

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

		const Body = (await files[0].arrayBuffer()) as Buffer

		s3.send(
			new PutObjectCommand({
				Bucket,
				Key: `dummy/profile/${files[0].name}`,
				Body,
				ContentType: "image/png",
			}),
		)

		return Response.json({ message: "OK" })
	} catch (error) {
		return Response.error()
	}
}
