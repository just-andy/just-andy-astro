const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 3,
            features: {
                'nesting-rules': true,
                'custom-media-queries': true,
                'media-query-ranges': true,
            },
        }),
        autoprefixer(),
    ],
};
