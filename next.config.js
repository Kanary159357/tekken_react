const nextConfig = {
    /* config options here */
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({ nextConfig });
