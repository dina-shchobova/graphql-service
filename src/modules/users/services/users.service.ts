import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class UsersService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getUser(id: string) {
    try {
      const userData = await this.get(`/${id}`);
      console.log('this is userData', userData);
      return userData;
    } catch (e) {
      console.log(e);
    }
  }

  async registerUser(registerUserInput) {
    try {
      const data = await this.post(`register`, registerUserInput);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

}

export { UsersService };
