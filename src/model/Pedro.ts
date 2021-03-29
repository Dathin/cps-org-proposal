import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table({ tableName:'pedro', schema : 'public' })
export class Pedro extends Model<Pedro> {

  @Column
  name?: string

  @Column
  isBetaMember?: boolean;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;

}