import {RESTDataSource} from "apollo-datasource-rest";
import "dotenv/config";

class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getGenres(limit: number = 5, offset: number = 0) {
    try {
      const res = await this.get(`/?limit=${limit}&offset=${offset}`);
      return res.items;
    } catch (e) {
      console.log(e);
    }
  }

  async getGenre(id: string) {
    try {
      return this.get(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  async createGenre(genresInput) {
    try {
      return await this.post(``, genresInput);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteGenre(id: string) {
    try {
      return await this.delete(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  async updateGenre(id, genresInput) {
    try {
      return await this.put(`/${id}`, genresInput);
    } catch (e) {
      console.log(e);
    }
  }
}

export {GenresService};
