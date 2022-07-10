import {RESTDataSource} from "apollo-datasource-rest";
import "dotenv/config";

class FavouritesService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getFavourites() {
    try {
      return await this.get('');
    } catch (e) {
      console.log(e);
    }
  }

  async addToFavourites(addFavouriteInput) {
    try {
      return await this.put('/add', addFavouriteInput);
    } catch (e) {
      console.log(e);
    }
  }

  async removeFromFavourites(removeFavouriteInput) {
    try {
      return await this.put('/remove', removeFavouriteInput);
    } catch (e) {
      console.log(e);
    }
  }
}

export {FavouritesService};
