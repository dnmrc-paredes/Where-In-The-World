/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: 'upload.wikimedia.org'
			},
			{
				hostname: 'flagcdn.com'
			}
		]
	},
	compiler: {
		styledComponents: true
	}
}
