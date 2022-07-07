import {RESTDataSource} from "apollo-datasource-rest";
import "dotenv/config";

class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getTracks(limit: number = 5, offset: number = 0) {
    try {
      const res = await this.get(`/?limit=${limit}&offset=${offset}`);
      return res.items;
    } catch (e) {
      console.log(e);
    }
  }

  async getTrack(id: string) {
    try {
      return this.get(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
}

export {TracksService};
