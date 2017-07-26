import { Component, OnInit, OnChanges, SimpleChanges, NgModule, Input} from '@angular/core';
import { Response} from '@angular/http';
import {HttpService} from './http.service';
import {Li} from './li';


@Component({
    selector: 'app',
    template: `<ul class="list-group">
                <tree [nodes]="arr"></tree>
              </ul>
              `,
    providers: [HttpService]
})
export class app {
  arr: any[] = [];
  

  constructor(private httpService: HttpService){};
  ngOnInit() {
    this.httpService.getData().subscribe((data: Response) => {
        this.arr = data.json();
      }
    )
  };
}