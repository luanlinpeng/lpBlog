/**
 * typeorm入口文件
 */
import { DataSource, DataSourceOptions } from 'typeorm'
import { User, UserAuth } from './entity/index'
import "reflect-metadata"

const host = process.env.DATABASE_HOST;
const port = Number(process.env.DATABASE_PORT);
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

let connectionReadyPromise: Promise<DataSource> | null = null;

export const prepareConnection = () => {
  if (!connectionReadyPromise) {
    connectionReadyPromise = (async () => {
      
      const connection = new DataSource({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        entities: [User, UserAuth ],
        synchronize: false,
        logging: true
      })
      await connection.initialize()
      .then(() => {
          console.log("Data Source has been initialized!")
      })
      .catch((err) => {
          console.error("Error during Data Source initialization", err)
      })
      return connection
    })()
  }
  return connectionReadyPromise

}