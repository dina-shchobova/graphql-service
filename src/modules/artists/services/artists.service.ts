import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class ArtistsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  async getArtists() {
    try {
      const res = await this.get('');
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
