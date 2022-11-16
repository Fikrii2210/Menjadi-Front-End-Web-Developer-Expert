import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div tabindex="0" class="content">
    <h2 tabindex="0" class="content__heading">Favorite</h2>
    <div id="foods" tabindex="0" class="foods">

    </div>
  </div>
    `;
  },

  async afterRender() {
    const foods = await FavoriteRestaurantIdb.getAllRestaurants();
    const foodsContainer = document.querySelector('#foods');

    if (foods.length) {
      foods.forEach((food) => {
        foodsContainer.innerHTML += createRestaurantItemTemplate(food);
      });
    } else {
      foodsContainer.innerHTML += '<h1 class="empty__favorite">Tidak ada favorite restaurant</h1>';
    }
  },
};

export default Favorite;
