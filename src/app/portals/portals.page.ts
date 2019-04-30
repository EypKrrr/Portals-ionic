import { Component, OnInit } from '@angular/core';
import {MenuService} from '../menu.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-portals',
  templateUrl: './portals.page.html',
  styleUrls: ['./portals.page.scss'],
})
export class PortalsPage implements OnInit {

  selected;
  added;

  constructor(private menuService: MenuService, private appComponent: AppComponent) {
    this.selected = this.appComponent.getSelected();
    this.menuService.getAddedPortals()
    .subscribe(res => this.added = res);
  }

  ngOnInit() {

  }

}
