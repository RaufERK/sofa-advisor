module.exports = {
  apps: [
    {
      name: 'sofa-advisor',
      script: 'npm',
      args: 'run start',
      cwd: '/var/www/sofa-advisor/current',
      exec_mode: 'cluster',
      // instances: 2,
      env: {
        NODE_ENV: 'production',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
  deploy: {
    production: {
      user: 'appuser',
      host: 'your.server.ip.address',
      ref: 'origin/main',
      repo: 'git@github.com:YOUR_GITHUB/sofa-advisor.git',
      path: '/var/www/sofa-advisor',
      'post-deploy':
        'export PATH=$HOME/.nvm/versions/node/v22.15.1/bin:$PATH && npm install && npm run build && pm2 reload ecosystem.config.js --only sofa-advisor',
      ssh_options: 'StrictHostKeyChecking=no',
    },
  },
} 
