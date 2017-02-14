'use strict';

require('should');
const config = require('../../config');
const SlackClient = require('../../server/slackClient');

describe('slackClient', () => {
    it('should successfully connect to slack', (done) => {

        const slackClient = new SlackClient(config.slackToken, config.slackLogLevel);
        slackClient.start((slackRes) => {
            slackRes.ok.should.be.true;
            return done();
        });

    });
});