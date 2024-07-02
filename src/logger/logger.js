// logger.js
const styles = require('./logStyles');
const defaultStyles = {
    info: 'color: blue;',
    warning: 'color: orange;',
    error: 'color: red;'
};

function styledLog(message, tag = 'info') {
    const style = defaultStyles[tag] || '';
    console.log(`%c${message}`, style);
}

module.exports = { styledLog };
