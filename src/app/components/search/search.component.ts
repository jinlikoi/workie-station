import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword: string = '';
  public historyList: any[] = [];
  constructor(public storage: StorageService) {
  }

  doSearch() {
    if (this.keyword.length === 0) {
      alert('Ops! Your input is empty. ');
    } else if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword);
      this.storage.set('searchlist', this.historyList);
      // location.href = 'https://www.baidu.com/s?wd=' + this.keyword;
      window.open('https://www.baidu.com/s?wd=' + this.keyword);
    } else if(this.historyList.indexOf(this.keyword) != -1) {
      // location.href = 'https://www.baidu.com/s?wd=' + this.keyword;
      window.open('https://www.baidu.com/s?wd=' + this.keyword);
    }
    this.keyword = '';
  }

  doSearchEnter(e: { keyCode: number; }) {
    if (e.keyCode === 13) {
      if (this.keyword.length == 0) {
        alert('Ops! Your input is empty. ');
      } else if (this.historyList.indexOf(this.keyword) == -1) {
        this.historyList.push(this.keyword);
        this.storage.set('searchlist', this.historyList);
        // location.href = 'https://www.baidu.com/s?wd=' + this.keyword;
        window.open('https://www.baidu.com/s?wd=' + this.keyword);
      } else if(this.historyList.indexOf(this.keyword) != -1) {
        // location.href = 'https://www.baidu.com/s?wd=' + this.keyword;
        window.open('https://www.baidu.com/s?wd=' + this.keyword);
      }
      this.keyword = '';
    }
  }

  deleteHistory(key: any) {
    this.historyList.splice(key, 1);
    this.storage.set('searchlist', this.historyList);
  }

  doSearchAgain(key: any) {
    window.open('https://www.baidu.com/s?wd=' + key);
  }

  ngOnInit() {
    var searchlist: any = this.storage.get('searchlist');
    if (searchlist) {
      this.historyList = searchlist;
    }
  }

}
