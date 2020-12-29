import { User } from '../data/entity/User';
import { createConnection } from 'typeorm';
import { dbOptions } from './../constants';

export class Database {
  
  static async getDatabaseConnection() {

    createConnection(dbOptions).then(async connection => {

      const repo = connection.getRepository(User);
      const user = new User();
      user.email = "michael@sofdigital.net";
      user.hash = "lkj32lk4jsadlkfjl23k4j23";
      await repo.save(user);

      const allUsers = await repo.find();
      const firstUser = await repo.findOne(1);
      const findOne = await repo.findOne({ email: "michael@sofdigital.net" });

      console.log(allUsers);
      console.log(firstUser?.email);
      console.log(findOne?.email);
      await repo.remove(user);

    }).catch(error => console.log(error));
  }
}