import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | thing', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:thing');
    assert.ok(route);
  });
});
