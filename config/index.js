require('dotenv').config();
const bunyan = require('bunyan');

const log = {
    development: () => {
        return bunyan.createLogger({name: 'IRIS-development', level: 'debug'});
    },
    production: () => {
        return bunyan.createLogger({name: 'IRIS-production', level: 'info'});
    },
    test: () => {
        return bunyan.createLogger({name: 'IRIS-test', level: 'fatal'});
    }
};

module.exports = {
    witToken: process.env.WIT_TOKEN,
    slackToken: process.env.SLACK_TOKEN,
    slackLogLevel: 'verbose',
    serviceTimeout: 30,
    log: (env) => {
        if(env) return log[env]();
        return log[process.env.NODE_ENV || 'development']();
    }
};