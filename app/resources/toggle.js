import { Resource } from 'ember-resources';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export class Toggle extends Resource {
  @tracked value;

  constructor(owner, args) {
    super(owner, args);
    this.value = args.named.value;
  }

  @action
  toggle() {
    this.value = !this.value;
  }
}
