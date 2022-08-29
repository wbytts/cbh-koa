import { Model, Table, Column } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export default class User extends Model {
  @Column
  name!: string; // 姓名
  @Column
  email!: string; // 邮箱
  @Column
  mobile!: string; // 手机
  @Column
  password!: string; // 密码
  @Column
  age!: number; // 年龄
}
