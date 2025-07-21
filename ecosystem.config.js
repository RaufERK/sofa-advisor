module.exports = {
  apps: [
    {
      name: 'sofa-advisor',
      cwd: '/var/www/sofa-advisor',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}
