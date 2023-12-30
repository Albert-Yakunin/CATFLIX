import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catflix';

  //determine type,
  navColor:any;

  @HostListener('document:scroll') scrollDown() {
    // change logic swap bgcolor
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navColor = {
        'background-color': '#000000',
      };
    } else {
      this.navColor = {};
    }
  }
}
