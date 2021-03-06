import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SectionComponent extends Component {
  @tracked isOpen = true;

  @action
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
