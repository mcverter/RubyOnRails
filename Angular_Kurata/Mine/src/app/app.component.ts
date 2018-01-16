import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: `
    <div>
        <nav class="navbar navbar-default">
        <div>
        <a>{{pageTItle}}</a>
        <ul class="nav navbar-new">
        <li><a [routerLink="['/welcome]">Home</a></li>
                <li><a [routerLink="['/welcome]">Home</a></li>

</ul>
</div>
</nav>
<div><router-outlet></router-outlet></div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
