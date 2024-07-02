// config.js

const fs = require('fs');
const eslint = require('eslint');

function applyConfig(configFilePath) {
    const config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));

    // Set up ESLint based on the config
    const cli = new eslint.ESLint({ baseConfig: config.eslint });

    // Example function to lint code
    async function lintCode(code) {
        const results = await cli.lintText(code);
        const formatter = await cli.loadFormatter('stylish');
        const resultText = formatter.format(results);

        console.log(resultText);
    }

    return { lintCode };
}

module.exports = { applyConfig };
