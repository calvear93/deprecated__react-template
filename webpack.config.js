const path = require('path');
const { CracoAliasPlugin, aliasWebpack } = require('react-app-alias')
const stylelint = require("stylelint-webpack-plugin");
const jestConfig = require('./jest.config.json');

(async () => {
    const a = await aliasWebpack(require('./tsconfig.json').compilerOptions.paths);
    console.log(a)
})();

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
        alias: aliasWebpack(require('./tsconfig.json').compilerOptions.paths),
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
        mode: 'file'
    }
};
