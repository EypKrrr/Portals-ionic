import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import {MenuService} from '../menu.service';
import { AppComponent } from '../app.component';

class Port {
  public id: number;
  public name: string;
}

class Port1 {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  AddedPortals;
  portals;
  SelectedPortal;
  temp;

  constructor(private menuService: MenuService, private appComponent: AppComponent) {
    this.menuService.getPortals()
    .subscribe(res => this.portals = res);
    this.menuService.getAddedPortals()
    .subscribe(res => this.AddedPortals = res);
    this.SelectedPortal = this.appComponent.getSelected();
  }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  port1Change(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  yazdir() {
    console.log('Added portals' + this.AddedPortals);
  }

  changePortal(param: string) {
    this.SelectedPortal = param;
    console.log(param);
  }
  ngOnInit() {
  }

}
