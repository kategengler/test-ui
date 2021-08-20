import Route from '@ember/routing/route';

export default class ThingRoute extends Route {
  model({ id }) {
    return { id: +id };
  }
}
