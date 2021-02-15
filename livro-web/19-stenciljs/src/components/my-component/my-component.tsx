import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  private myTitle = 'StencilJS';

  render() {
    return <div>
    Hello, World! I'm a Web Component built with Stencil!

    <div>
      <x-dropdown label={this.myTitle} onShowChange={(e) => this.log(e)}>
        Hello from Stencil Dropdown!
      </x-dropdown>
    </div>
  </div>;
  }

  private log(event: any) {
    console.log(event);
  }
}
