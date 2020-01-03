import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

//  place where we can write the code for fetching data and loading it into the routes.
export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map(model => {
      let { id, attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
}