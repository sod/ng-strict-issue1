import { Component } from '@angular/core';

interface Feature {
  lorem: ('a' | 'b' | 'c')[]
  ipsum: ('a' | 'b' | 'c')[]
}

@Component({
  selector: 'app-root',
  template: `
    // angular strictTemplates assumes "lorem" may be undefined, even though it's guaranteed by the interface
    {{ feature?.lorem.includes('a') }}
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
      lorem: ['b', 'c'],
      ipsum: ['a', 'b', 'c'],
    }
  }
  feature: Feature | undefined = this.features.a;

  constructor() {
    // typescript understands that ipsum is guaranteed as of interface "Feature"
    this.feature?.ipsum.includes('a')
  }
}
