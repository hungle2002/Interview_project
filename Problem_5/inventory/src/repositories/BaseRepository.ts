import { Prisma } from "@prisma/client";
import GenralModelType from "../interfaces/common";
import db from "../modules/db";

class BaseRepository{
  private _schemaName: string
  private _tableName: string

  constructor(_schemaName: string, _tableName: string) {
    this._schemaName = _schemaName;
    this._tableName = _tableName;
  }

  public setRepoSrc(_schemaName?: string, _tableName?: string): void{
    if( _schemaName ){
      this._schemaName = _schemaName
    }
    if( _tableName ){
      this._tableName = _tableName
    }
  }
  public async getAll (_schemaName: string = this._schemaName, _tableName: string = this._tableName) : Promise<GenralModelType[]> {
    const sql = `SELECT * FROM ${_schemaName}.${_tableName}`
    return await db.$queryRaw(Prisma.raw(sql))
  }

  public async getById (id: string, _schemaName: string = this._schemaName, _tableName: string = this._tableName) : Promise<GenralModelType[]> {
    const sql = ` SELECT * FROM ${_schemaName}.${_tableName} WHERE id = ${id}`
    return await db.$queryRaw(Prisma.raw(sql))
  }
}

export default BaseRepository;