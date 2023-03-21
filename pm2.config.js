module.exports = {
  apps: [
    {
      name: "node-red-bot",
      //script: "node-red",
      script: "./node_modules/node-red/red.js",
      args: "-s settings.js -u ./",
      watch: false,
      node_args: "--max_old_space_size=1500",
      autorestart: true,
      env: {
        NODE_ENV: "LOCAL",
        TG_TOKEN: '5760062830:AAHjpycsObc5N5hd4mebzj_ZwSRmGxsKwjE',
        projectID: 'animatebot-nvsy',
        CHANNEL: 'TG',
        PORT: 1890
      }
    },
  ],
};
