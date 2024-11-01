import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: ['ucarecdn.com', 'med-travel.mrjtrade.uz', 'cdn.sanity.io'], // Authorized image domains
        formats: ['image/webp', 'image/avif'], // Enable modern formats
        deviceSizes: [320, 420, 768, 1024, 1200], // Define responsive sizes to optimize
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable", // Caches images for a long time
                    },
                ],
            },
        ];
    },
};

export default withNextIntl(nextConfig);
