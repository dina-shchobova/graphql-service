import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class GenresService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.GENRES_URL;
  }

  async getGenres(limit: number, offset: number) {
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

  async createGenre(genreInput) {
    try {
      return await this.post(``, genreInput)
    } catch (e) {
      console.log(e);
    }
  }
}

export { GenresService };
