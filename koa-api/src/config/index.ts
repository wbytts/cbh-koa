import dotenv from 'dotenv';

dotenv.config();
// console.log(process.env)

const config = {
  env: process.env.NODE_ENV,
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    name: process.env.MYSQL_NAME,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
  log4js: {
    appenders: {
      cheese: { type: 'file', filename: './logs/cheese.log' },
      access: { type: 'file', filename: './logs/access.log' },
    },
    categories: {
      default: { appenders: ['cheese'], level: 'info' },
      access: { appenders: ['access'], level: 'info' },
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE,
  },
};

export default config;
