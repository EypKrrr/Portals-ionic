import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpService: HttpClient) { }

  getKocaeliMenues() {
    return this.httpService.get('../assets/mock-datas/kocaeli-menu.json');
  }

  getEnformatikMenues() {
    return this.httpService.get('../assets/mock-datas/enformatik-menu.json');
  }

  getBilgisayarMenues() {
    return this.httpService.get('../assets/mock-datas/bilgisayar-menu.json');
  }

  getPortals() {
    return this.httpService.get('../assets/mock-datas/portal.json');
  }

  getAddedPortals() {
    return this.httpService.get('../assets/mock-datas/added-portals.json');
  }

}
