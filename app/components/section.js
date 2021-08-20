import Component from '@glimmer/component';
import { TrackedWeakSet } from 'tracked-built-ins';
import { action } from '@ember/object';

export default class SectionComponent extends Component {
  closed = new TrackedWeakSet();

  get isOpen() {
    return !this.closed.has(this.args.for);
  }

  @action
  toggle() {
    if (this.closed.has(this.args.for)) {
      this.closed.delete(this.args.for);
    } else {
      this.closed.add(this.args.for);
    }
  }
}
