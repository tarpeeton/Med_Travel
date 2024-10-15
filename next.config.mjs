import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: ['ucarecdn.com', 'med-travel.mrjtrade.uz'], // Corrected domain configuration
    },
};

export default withNextIntl(nextConfig);
