const path = require('path');
const alias = require('craco-alias');
const stylelint = require("stylelint-webpack-plugin");
const { ESLINT_MODES } = require("@craco/craco");

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
        configure: {
            "verbose": true,
            "slowTestThreshold": 10,
            "testTimeout": 30000,
            "clearMocks": true,
            "coverageDirectory": "__reports__/coverage",
            "collectCoverageFrom": [
                "src/**/*.(t|j)s"
            ],
            "coveragePathIgnorePatterns": [
                "index.ts",
                ".d.ts",
                "src/app",
                "src/modules",
                "service-worker.ts",
                "tests",
                "__reports__",
                "__tests__",
                "__mocks__"
            ]
        }
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
