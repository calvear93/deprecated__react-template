const path = require('path');
const alias = require('craco-alias');
const stylelint = require("stylelint-webpack-plugin");
const { ESLINT_MODES } = require("@craco/craco");
const jestConfig = require('./jest.config.json');

module.exports = {
    devServer: {
        compress: false,
        headers: {
            'X-Frame-Options': 'SAMEORIGIN',
            'X-Content-Type-Options': 'nosniff',
            'X-XSS-Protection': '1; mode=block'
        }
    },
    webpack: {
        plugins: {
            add: [
                new stylelint({
                    configBasedir: __dirname,
                    context: path.resolve(__dirname, 'src'),
                    files: ['**/*.css', '**/*.scss'],
                })
            ]
        }
    },
    jest: {
        configure: jestConfig
    },
    eslint: {
        mode: ESLINT_MODES.file
    },
    plugins: [
        {
            plugin: alias,
            options: {
                source: 'tsconfig',
                baseUrl: 'src',
                tsConfigPath: 'tsconfig.json'
            }
        }
    ]
};
