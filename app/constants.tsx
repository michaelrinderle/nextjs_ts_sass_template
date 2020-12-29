import { ConnectionOptions } from "typeorm";
import { User } from "./data/entity/User";

// global constants
export const title: string = "Crypto Market JS";
export const author: string = "Michael G. Rinderle, R.L.";
export const copyright: string = "Copyright 2020";

export const baseStaticPath: string = '/rinderlm/webdev114/a6';
export const isProd: boolean = process.env.NODE_ENV === 'production';

export const admin: string = "admin";
export const pass: string = "bJghoyl3JJkdKAFi";
export const db: string = "CryptoMarket";


export const dbOptions: ConnectionOptions = {
  type: "mongodb",
  host: "admin:bJghoyl3JJkdKAFi@cryptomarket-shard-00-02.oeo5k.azure.mongodb.net:27017/CryptoMarket?retryWrites=true", 
  port: 27017,
  ssl: true,
  replicaSet: "atlas-1vy5yg-shard-0",
  authSource : "admin",
  useNewUrlParser: true,
  entities: [ User ],
  synchronize: true,
  logging: true
};