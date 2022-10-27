import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryViewComponent } from './shared/category-view/category-view.component';
import { BookmarkDetailsComponent } from './shared/bookmark/bookmark-details/bookmark-details.component';
import { HomeComponent } from './feature/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { BookmarkListComponent } from './shared/bookmark/bookmark-list/bookmark-list.component';
import { AddBookmarkComponent } from './shared/bookmark/add-bookmark/add-bookmark.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryViewComponent,
    BookmarkDetailsComponent,
    HomeComponent,
    BookmarkListComponent,
    AddBookmarkComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
