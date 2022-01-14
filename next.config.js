let SpritesmithPlugin = require('webpack-spritesmith');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
let path = require('path');

const nextConfig = {};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    trailingSlash: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/i,
            include: /.*_sprite\.svg/,

            loader: 'svg-sprite-loader',
            options: {
                extract: true,
                publicPath: '',
            },
        });
        config.plugins.push(new SpriteLoaderPlugin());
        config.plugins.push(
            new SpritesmithPlugin({
                src: {
                    cwd: path.resolve(__dirname, 'public/icon'),
                    glob: '*.png',
                },
                target: {
                    image: path.resolve(
                        __dirname,
                        'public/spritesmith-generated/sprite.png'
                    ),
                    css: [
                        [
                            path.resolve(__dirname, 'lib//styles//sprite.json'),
                            {
                                format: 'json_texture',
                            },
                        ],
                    ],
                },
                apiOptions: {
                    cssImageRef: '~sprite.png',
                },
            })
        );
        return config;
    },
});
