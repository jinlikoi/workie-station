import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss']
})
export class LockComponent implements OnInit {

  constructor(public storage: StorageService) { }

  isSecret = this.storage.get('isSecret');

  observable: any;
  inputPassword: number[] = [];
  expectedPassword: number[] = [7, 1, 4, 5, 8, 9];
  flag: boolean;

  checkSecretMode() {
    this.isSecret = this.storage.get('isSecret');
  }

  pushPassword(k: number) {
    this.inputPassword.push(k);
    if (this.inputPassword.length === 6) {
      this.flag = this.matchOrNot(this.inputPassword, this.expectedPassword);
      if (this.flag === false) {
        alert('Wrong password');
        this.inputPassword.splice(0, 6);
      } else {
        this.inputPassword.splice(0, 6);
        this.isSecret = 0;
        this.storage.set('isSecret', this.isSecret);
      }
    }
  }

  matchOrNot(inputPassword: number[], expectedPassword: number[]) {
    for (let i = 0; i < 6; i ++) {
      if (inputPassword[i] === expectedPassword[i]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  deletePassword() {
    this.inputPassword.pop();
  }

  ngOnInit() {
    this.observable = fromEvent(
      document.getElementById('c1'), 'click'
    ).subscribe((event) => { this.pushPassword(1); }
    );

    this.observable = fromEvent(
      document.getElementById('c2'), 'click'
    ).subscribe((event) => { this.pushPassword(2); }
    );

    this.observable = fromEvent(
      document.getElementById('c3'), 'click'
    ).subscribe((event) => { this.pushPassword(3); }
    );

    this.observable = fromEvent(
      document.getElementById('c4'), 'click'
    ).subscribe((event) => { this.pushPassword(4); }
    );

    this.observable = fromEvent(
      document.getElementById('c5'), 'click'
    ).subscribe((event) => { this.pushPassword(5); }
    );

    this.observable = fromEvent(
      document.getElementById('c6'), 'click'
    ).subscribe((event) => { this.pushPassword(6); }
    );

    this.observable = fromEvent(
      document.getElementById('c7'), 'click'
    ).subscribe((event) => { this.pushPassword(7); }
    );

    this.observable = fromEvent(
      document.getElementById('c8'), 'click'
    ).subscribe((event) => { this.pushPassword(8); }
    );

    this.observable = fromEvent(
      document.getElementById('c9'), 'click'
    ).subscribe((event) => { this.pushPassword(9); }
    );

    this.observable = fromEvent(
      document.getElementById('c0'), 'click'
    ).subscribe((event) => { this.pushPassword(0); }
    );

    // this.observable = fromEvent(
    //   document.getElementById('c10'), 'click'
    // ).subscribe((event) => { this.pushPassword(2); }
    // );

    this.observable = fromEvent(
      document.getElementById('c11'), 'click'
    ).subscribe((event) => { this.deletePassword(); }
    );

    this.observable = fromEvent(
      document, 'click'
    ).subscribe((event) => { this.checkSecretMode(); }
    ); // Tip for myself: don't change this part!
  }

}
