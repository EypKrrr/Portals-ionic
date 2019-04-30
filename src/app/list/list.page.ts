import { Component, OnInit } from '@angular/core';
import {MenuService} from '../menu.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  menues;

  selected;

  constructor(private menuService: MenuService, private appComponent: AppComponent) {
    this.selected = this.appComponent.getSelected();
  }

  ngOnInit() {
    if (this.selected === 'Kocaeli.edu.tr') {
      this.menuService.getKocaeliMenues()
      .subscribe(res => this.menues = res);
    } else if (this.selected === 'Enformatik') {
      this.menuService.getKocaeliMenues()
      .subscribe(res => this.menues = res);
    } else if (this.selected === 'Bilgisayar') {
      this.menuService.getKocaeliMenues()
      .subscribe(res => this.menues = res);
    }

  }
}
