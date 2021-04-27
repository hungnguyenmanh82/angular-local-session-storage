import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss'],
})
export class LocalStorageComponent implements OnInit {
  constructor() {}

  key1: string = '';

  store: any;

  /**
   * localStorage.length
   * localStorage.key(index):
   * localStorage.getItem(key)
   * localStorage.setItem(key, value)
   * localStorage.removeItem(key)
   *
   * localStorage.clear()
   */
  ngOnInit(): void {
    /**
     * Ctrl + click: jump code để xem các function của nó
     *
     *  window.localStorage và window.sessionStorage cùng interface là Storage
     */
    this.store = window.localStorage;

    /**
     * localStorage: là biến toàn cục bỏ "window." vẫn ok
     */

    this.showAll();
  }

  index: number = 1;
  public onSetItem() {
    this.index++;

    // save data vào localStorage
    localStorage.setItem('key1', 'value' + '-' + this.index);

    this.showAll();
  }

  // cập nhật lại thông tin của window.localStorage
  public showAll() {
    //show value
    this.onGetItem();
    this.onGetKeys();
    this.onGetItem();
  }

  public onSetItem2() {
    // save data vào localStorage
    localStorage.setItem('key2', 'value2');
    localStorage.setItem('key3', 'value3');
    localStorage.setItem('key4', 'value4');
    localStorage.setItem('key5', 'value5');

    //show value
    //để show các key lưu ở localStorage
    this.showAll();
  }

  public onGetItem() {
    // lấy data localStorage
    this.key1 = <string>localStorage.getItem('key1');
  }

  public onRemoveItem() {
    //remove from localStorage
    localStorage.removeItem('key1');

    //show value
    this.showAll();
  }

  keys?: Array<string>;

  //để show các key lưu ở localStorage
  public onGetKeys() {
    this.keys = []; //reset

    for (let i = 0; i < localStorage.length; i++) {
      this.keys.push(<string>localStorage.key(i));
    }
  }

  public onClear() {
    localStorage.clear();

    //để show các key lưu ở localStorage
    this.showAll();
  }
}
