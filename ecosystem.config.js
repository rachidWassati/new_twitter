module.exports = {
  apps : [{
    name: 'Twiiter',
    instances: 'max',
    script: './bin/www',
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'dev'
    },
    env_prod: {
      NODE_ENV: 'prod'
    }
  }],
};