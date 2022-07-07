import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class UsersService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.USERS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getUser(id: string) {
    try {
      return await this.get(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  async getJWT(email: string, password: string) {
    try {
       const res = await this.post(`/login`, {
        email, password
      });
      return res.jwt;
    } catch (e) {
      console.log(e);
    }
  }

  async registerUser(registerUserInput) {
    try {
      return await this.post(`/register`, registerUserInput);
    } catch (e) {
      console.log(e);
    }
  }

}

export { UsersService };
