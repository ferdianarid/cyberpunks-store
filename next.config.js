/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "api.lorem.space",
            "images-na.ssl-images-amazon.com",
            "images.tokopedia.net",
            "images-na.ssl-images-amazon.com",
            "miro.medium.com",
            "i.pinimg.com",
            "www.sprinthink.id",
            "www.agence-bradford.com"
        ],
    },
}

module.exports = nextConfig