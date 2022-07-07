import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAlbums(limit: number, offset: number) {
    try {
      const res = await this.get(`/?limit=${limit}&offset=${offset}`);
      return res.items;
    } catch (e) {
      console.log(e);
    }
  }

  async getAlbum(id: string) {
    try {
      return this.get(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
}

export { AlbumsService };
