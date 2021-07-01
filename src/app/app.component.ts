import { Component } from '@angular/core';

interface Feature {
  lorem: ('a' | 'b' | 'c')[]
  ipsum: ('a' | 'b' | 'c')[]
}

@Component({
  selector: 'app-root',
  template: `
    {{ foo?.bar.includes('baz') }}
  `,
  styles: []
})
export class AppComponent {
  features: Record<string, Feature> = {
    a: {
      lorem: ['a'],
      ipsum: ['a'],
    },
    b: {
      lorem: ['b'],
      ipsum: ['b'],
    }
  }
  feature: Feature | undefined = this.features.a;
}
