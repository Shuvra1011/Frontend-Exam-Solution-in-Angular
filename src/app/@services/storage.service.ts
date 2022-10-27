import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: any ={};
  constructor() { 
    const data = localStorage.getItem('storage');
    if (data !== null) {
      this.storage = JSON.parse(data);
    }
  }

  get(key: string) {
    let attr = '';
    if (key.indexOf('.') > 0) {
      let oa = key.split('.');
      key = oa[0];
      attr = oa[1];
    }
    let value = this.storage[key];
    if (value === null || value === undefined) {
      // console.log("Null value for ", key);
      return '';
    }
    if (attr == '') {
      return value;
    } else {
      return value[attr];
    }
  }

  update() {
    const storage = JSON.stringify(this.storage);
    localStorage.setItem('storage', storage);
  }

  set(key: string, value: any) {
    this.storage[key] = value;
    setTimeout(() => {
      this.update();
    }, 100);
  }
  
}
