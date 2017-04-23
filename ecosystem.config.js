module.exports = {
  apps: [{
    name: 'luzamerica.org',
    script: './app/build/index.js',
    watch: true,
    env: {
      'NODE_ENV': 'development',
    },
    env_production : {
       'NODE_ENV': 'production'
    }
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-186-0-245.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/luzamerica.pem',
      ref: 'origin/master',
      repo: 'git@github.com:luzamerica/luzamerica.org.git',
      path: '/home/ubuntu/luzamerica.org',
      'post-deploy': 'npm install;npm run build;pm2 stop;killall -9 node;pm2 start index.js --name "luzamerica.org" ecosystem.config.js'
    }
  }
}
