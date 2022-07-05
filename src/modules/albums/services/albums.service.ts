import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  async getAlbums() {
    try {
      const res = await this.get('');
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
