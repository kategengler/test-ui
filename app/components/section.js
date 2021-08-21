import Component from '@glimmer/component';
import { useResource } from 'ember-resources';
import { Toggle } from '../resources/toggle';

export default class SectionComponent extends Component {
  isOpen = useResource(this, Toggle, () => ({
    value: true,
    for: this.args.for,
  }));
}
