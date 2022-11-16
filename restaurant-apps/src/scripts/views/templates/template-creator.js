import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="list-item">
    <a href="${`/#/detail/${restaurant.id}`}"> 
    <img class="lazyload" tabindex="0" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name || '-'} restaurant" />
    <div class="list-content">
      <h3 tabindex="0" class="restaurant__name">${restaurant.name || '-'}</h3>
      <p tabindex="0" class="item-rating"><strong>★</strong> ${restaurant.rating || '-'}</p>
      <p tabindex="0" class="item-location">Location: ${restaurant.city || '-'}</p>
    </div></a>
  </article>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
  <img tabindex="0" class="restaurantImg" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="restaurant images">
    <div tabindex="0" class="content-detail">
      <h2 tabindex="0" class="restaurantName-detail restaurant__name">${restaurant.name}</h1>
      <p tabindex="0" class="rating-detail">⭐️ ${restaurant.rating}</p>
      <div tabindex="0" class="description-detail">
        <h3>Description</h3>
        <p class="description-content">${restaurant.description}</p>
      </div>
      <div tabindex="0" class="location-detail">
        <h3>Location</h3>
        <p tabindex="0" class="location-address">${restaurant.address}, ${restaurant.city}</p>
      </div>
    </div>

    <div tabindex="0" class="restaurantMenu">
      <h2>Restaurant Menu</h2>
      <div tabindex="0" class="foods-menu">
        <p tabindex="0" class="menu-title">Foods</p>
        <p tabindex="0" class="foods-item">
          ${restaurant.menus.foods.map((food) => `${food.name}, `).join('')}
        </p>
      </div>
      <div tabindex="0" class="drinks-menu"  >
        <p tabindex="0" class="menu-title">Drinks</p>
        <p tabindex="0" class="drinks-item"> 
        ${restaurant.menus.drinks.map((drink) => `${drink.name}, `).join('')}</p>
      </div>
    </div>

    <div tabindex="0" class="costumerReviews">
      <h2>Costumer Reviews</h2>
      <div tabindex="0" class="listReviews">
        ${restaurant.customerReviews
    .map(
      (contentReview) => `
        <div tabindex="0" class="itemReviews">
          <div tabindex="0" class="content-review">
            <p tabindex="0" class="name-reviewer">${contentReview.name}</p>
            <p tabindex="0" class="review">${contentReview.review}</p>
            <p tabindex="0" class="date-review">${contentReview.date}</p>
          </div>
        </div>`,
    )
    .join('')}
      </div>
    </div>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
