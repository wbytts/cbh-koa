import { startSequelize, stopSequelize } from '../src/core/db';

test('adds 1 + 1 to equal 2', () => {
  expect(1 + 1).toBe(2);
});

test('Sequelize连接MySQL数据库', async () => {
  await startSequelize();
  expect(1 + 1).toBe(2);
  await stopSequelize;
});
