import { Input, Component, NgModule } from '@angular/core';

@Component({
    selector: 'f',
    template:  `
                 <ul>
                   <li *ngFor="let item of arr">
                     <i>{{item.id}}</i>
                     <span>{{item.title}}</span>
                     <tree *ngIf="item.children"></tree>
                   </li>
                 </<ul>
               `
})
export class li {
  
}