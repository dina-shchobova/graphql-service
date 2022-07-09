import {RESTDataSource} from "apollo-datasource-rest";
import "dotenv/config";

class ArtistsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getArtists(limit: number = 5, offset: number = 0) {
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

  async createArtist(createArtistInput) {
    try {
      return await this.post(``, createArtistInput);
    } catch (e) {
      console.log(e);
    }
  }

  async deleteArtist(id: string) {
    try {
      return await this.delete(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  async updateArtist(id, updateArtistInput) {
    try {
      return await this.put(`/${id}`, updateArtistInput);
    } catch (e) {
      console.log(e);
    }
  }
}

export {ArtistsService};
