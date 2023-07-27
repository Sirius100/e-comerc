import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="h-screen w-60 m-auto flex justify-center items-center">
      <div class="h-24 w-24 border-8 border-dotted rounded-full border-sky-500 animate-spin">
      </div>
    </div>

  `,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

}
