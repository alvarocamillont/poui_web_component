import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'x-dropdown',
  styleUrl: 'x-dropdown.css',
  shadow: true
})
export class XDropdown {
  @Prop() label = 'dropdown';
  @State() show = false;
  @Event() showChange: EventEmitter;

  render() {
    return (
      <div>
        <button onClick={() => this.toggle()}>{this.label}</button>
        {this.show
          ? <div class="x-dropdown__content"><slot /></div>
          : <div></div>
        }
      </div>
    );
  }

  toggle() {
    this.show = !this.show;
    this.showChange.emit(this.show);
  }
}
