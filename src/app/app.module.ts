import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { HomeComponent } from './components/home/home.component';
import { MemoComponent } from './components/memo/memo.component';
import { LockComponent } from './components/memo/lock/lock.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
    MemoComponent,
    LockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
