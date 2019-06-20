import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { HomeComponent } from './components/home/home.component';
import { MemoComponent } from './components/memo/memo.component';
import { LockComponent } from './components/memo/lock/lock.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'todolist', component: TodolistComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'memo', component: MemoComponent,
    children: [
      {path: '', component: LockComponent}
    ]
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
