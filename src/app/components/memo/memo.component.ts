import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss']
})
export class MemoComponent implements OnInit {

  isSecret = 1;
  observable: any;

  constructor(public storage: StorageService) {
    this.storage.set('isSecret', this.isSecret);
   }

  change() {
    if (this.isSecret === 1) {
      this.isSecret = 0;
    } else {
      this.isSecret = 1;
    }
    this.storage.set('isSecret', this.isSecret);
  }

  checkSecretMode() {
    this.isSecret = this.storage.get('isSecret');
  }

  lockMemo() {
    this.isSecret = 1;
    this.storage.set('isSecret', this.isSecret);
  }

  ngOnInit() {
    this.observable = fromEvent(
      document, 'click'
    ).subscribe((event) => { this.checkSecretMode(); }
    ); // Tip for myself: don't change this part!

    this.observable = fromEvent(
      document.getElementById('lockButton'), 'click'
    ).subscribe((event) => { this.lockMemo(); }
    );
  }

}
