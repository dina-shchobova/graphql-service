import {RESTDataSource} from "apollo-datasource-rest";
import "dotenv/config";

class TracksService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_URL;
  }

  async getTracks() {
    try {
      const res = await this.get('');
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
