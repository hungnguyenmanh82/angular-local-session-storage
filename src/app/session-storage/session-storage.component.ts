import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-storage',
  templateUrl: './session-storage.component.html',
  styleUrls: ['./session-storage.component.scss'],
})
export class SessionStorageComponent implements OnInit {
  constructor() {}

  key1: string = '';

  store: any;

  /**
   * window.localStorage và window.sessionStorage cùng interface là Storage
   *
   * store.length
   * store.key(index):
   * store.getItem(key)
   * store.setItem(key, value)
   * store.removeItem(key)
   *
   * store.clear()
   */
  ngOnInit(): void {
    /**
     * Ctrl + click: jump code để xem các function của nó
     *
     * window.localStorage và window.sessionStorage cùng interface là Storage
     */
    this.store = window.sessionStorage;

    /**
     * store: là biến toàn cục bỏ "window." vẫn ok
     */

    this.showAll();
  }

  index: number = 1;
  public onSetItem() {
    this.index++;

    // save data vào store
    this.store.setItem('key1', 'value' + '-' + this.index);

    //show value
    this.onGetItem();
    this.onGetKeys();
    this.onGetItem();
  }

  public onSetItem2() {
    // save data vào store
    this.store.setItem('key2', 'value2');
    this.store.setItem('key3', 'value3');
    this.store.setItem('key4', 'value4');
    this.store.setItem('key5', 'value5');

    //show value
    //để show các key lưu ở store
    this.showAll();
  }

  public onGetItem() {
    // lấy data store
    this.key1 = <string>this.store.getItem('key1');
  }

  public onRemoveItem() {
    //remove from store
    this.store.removeItem('key1');

    //show value
    this.showAll();
  }

  keys?: Array<string>;

  //để show các key lưu ở store
  public onGetKeys() {
    this.keys = []; //reset

    for (let i = 0; i < this.store.length; i++) {
      this.keys.push(<string>this.store.key(i));
    }
  }

  public onClear() {
    this.store.clear();

    //để show các key lưu ở store
    this.showAll();
  }

  // cập nhật lại thông tin của window.localStorage
  public showAll() {
    //show value
    this.onGetItem();
    this.onGetKeys();
    this.onGetItem();
  }
}
