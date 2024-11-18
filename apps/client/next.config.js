/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	transpilePackages: ["@repo/ui"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "promptoven.s3.ap-northeast-2.amazonaws.com",
				port: "",
				pathname: "/dummy/**",
			},
			{
				protocol: "https",
				hostname: "promptoven.s3.ap-northeast-2.amazonaws.com",
				port: "",
				pathname: "/client/**",
			},
			{
				protocol: "https",
				hostname: "firebasestorage.googleapis.com",
				port: "",
				pathname: "/v0/b/**",
			},
			{
				protocol: "https",
				hostname: "assets.promptbase.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

