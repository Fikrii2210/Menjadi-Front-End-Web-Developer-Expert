const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Favorite Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#foods');
  I.see('Tidak ada favorite restaurant', '.empty__favorite');
});

Scenario('liking one restaurant', async (I) => {
  I.see('Tidak ada favorite restaurant', '.empty__favorite');
  I.amOnPage('/');

  I.seeElement('.list-item a');

  const firstRestaurant = locate('.list-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item a');

  const likedRestaurantTitle = await I.grabTextFrom('.list-item a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async (I) => {
  I.see('Tidak ada favorite restaurant', '.empty__favorite');
  I.amOnPage('/');

  I.seeElement('.list-item a');

  const firstRestaurant = locate('.list-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-item a');

  const likedRestaurantTitle = await I.grabTextFrom('.list-item a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  const firstFavoriteRestaurant = locate('#foods .list-item a').first();
  const firstFavoriteRestaurantTitle = await I.grabTextFrom(firstFavoriteRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstFavoriteRestaurantTitle);

  I.click('.list-item a');

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#foods');

  I.see('Tidak ada favorite restaurant', '.empty__favorite');
});
