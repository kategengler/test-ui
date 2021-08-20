import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SectionComponent extends Component {
  @tracked closed;

  get isOpen() {
    return this.closed !== this.args.for;
  }

  @action
  toggle() {
    if (this.isOpen) {
      this.closed = this.args.for;
    } else {
      this.closed = undefined;
    }
  }
}
