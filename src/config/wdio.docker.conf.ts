const merge = require('deepmerge');
const wdioConf = require( './wdio.conf.js');
const host = process.env.HUB_HOST;

exports.config = merge(wdioConf.config, {
    hostname: host,
    port: 4444,
    path: '/wd/hub',
    protocol: 'http'
}, { clone: false })
