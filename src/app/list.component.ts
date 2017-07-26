import { Input, Component, OnInit, NgModule  } from '@angular/core';

@Component({
    selector: 'tree',
        template: `
                  <li #li *ngFor="let item of nodes" class="list-group-item">
                    <i *ngIf="item.children.length != 0" (click)="childrenToggle(li)" class="list-group-toggle"></i>
                    <span>{{item.title}}</span>
                    
                    <tree *ngIf="item.children.length" [nodes]="item.children"></tree>
                  </li>
                  `
})
export class tree {
  @Input() nodes: any[];
  ngOnInit() {
  };
  childrenToggle(li: any) {
    for(let item of li.children) {
      if(item.tagName == "I") {
        item.classList.toggle('list-group-toggle--visible');
        continue;
      };
      if(item.tagName == "TREE") {
        item.classList.toggle('hidden');
        continue;
      }
    }
  }
}