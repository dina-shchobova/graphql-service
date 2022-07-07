import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class ArtistsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getArtists(limit: number, offset: number) {
    try {
      const res = await this.get(`/?limit=${limit}&offset=${offset}`);
      return res.items;
    } catch (e) {
      console.log(e);
    }

  }

  async getArtist(id: string) {
    try {
      return this.get(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
}

export { ArtistsService };
