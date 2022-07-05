import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  async getGenres() {
    try {
      return await this.get('');
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

  async createGenre(createGenreInput) {
    try {
      return await this.post(``, createGenreInput)
    } catch (e) {
      console.log(e);
    }
  }
}

export { GenresService };
