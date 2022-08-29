import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import config from '@/config';

const sequelize = new Sequelize(
  config.db.name as string, // 数据库名称
  config.db.username as string, // 用户名
  config.db.password, // 密码
  {
    host: config.db.host, // 主机名
    port: config.db.port as unknown as number, // 端口号
    dialect: 'mysql', // 数据库方言
    define: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      // 字段以下划线（_）来分割（默认是驼峰命名风格）
      underscored: true,
      // freezeTableName: true,
    },
  }
);

sequelize.addModels([path.resolve(__dirname, '../../models/**/*.ts')]);

export const startSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log('===> 数据库连接成功');
    if (config.env === 'dev') {
      // 根据模型同步创建表,生成环境需要关闭
      await sequelize.sync({
        alter: true,
        // force: true
      });
      console.log('===> 表结构同步完成');
    }
  } catch (error) {
    console.error('===> 数据库启动出错啦');
    console.error(error);
  }
};

export const stopSequelize = async () => {
  await sequelize.close();
};
