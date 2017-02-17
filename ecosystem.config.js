module.exports = {
    apps: [
        {
            name: 'IRIS',
            script: 'bin/run.js',
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],
    deploy: {
        production: {
            user: 'node',
            host: '35.160.143.122',
            ref: 'origin/master',
            repo: 'https://github.com/lynda-danielkhan/iris.git',
            path: '/srv/production',
            'post-deploy': 'cp ../.env ./ && npm install && pm2 startOrRestart --env production'
        }
    }
};