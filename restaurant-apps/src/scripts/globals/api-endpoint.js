// eslint-disable-next-line import/extensions
import CONFIG from './config.js';

const API_ENDPOINT = {
  ALL_RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
