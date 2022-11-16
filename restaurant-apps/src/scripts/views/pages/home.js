import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <restaurant-list id="restaurant-list" tabindex="0" class="restaurant-list">
      </restaurant-list>
    `;
  },

  async afterRender() {
    const restaurantList = document.querySelector('#restaurant-list');
    const restaurants = await RestaurantDbSource.allRestaurant();

    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
