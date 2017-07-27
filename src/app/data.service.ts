/*import {OnInit} from '@angular/core';
import {Li} from './li';
import {HttpService} from './http.service';

export class DataService {
  private tree: any[];

  constructor(private httpService: HttpService){};
  ngOnInit() {
    this.httpService.getData().subscribe((data: Response) => {
        this.tree = data.json();
      }
    )
  };
  
  addItem(id: number, title: string, children: any[]) {
    this.tree.push(new Li(id, title, children))
  }
  removeItem(index: number) {
    this.tree.splice(index, 1);
  }
}*/