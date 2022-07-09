import {RESTDataSource} from "apollo-datasource-rest";
import "dotenv/config";

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getAlbums(limit: number = 5, offset: number = 0) {
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

  async createAlbum(updateAlbumInput) {
    try {
      return await this.post(``, updateAlbumInput);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteAlbum(id: string) {
    try {
      return await this.delete(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  async updateAlbum(id, albumInput) {
    try {
      return await this.put(`/${id}`, albumInput);
    } catch (e) {
      console.log(e);
    }
  }
}

export {AlbumsService};
