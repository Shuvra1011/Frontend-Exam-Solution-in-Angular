import { Component } from '@angular/core';
import { Bookmark } from './@models/bookmark.interface';
import { Category } from './@models/category.interface';
import { StorageService } from './@services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmark-manager';
  private bookmarks: Bookmark[] = [
    {
      id: '1',
      title: 'Bookmark 1',
      url: 'https://www.google.com',
      categoryId: '1'
    },
    {
      id: '2',
      title: 'Bookmark 2',
      url: 'https://www.google.com',
      categoryId: '1'
    },
    {
      id: '3',
      title: 'Bookmark 3',
      url: 'https://www.google.com',
      categoryId: '2'
    },
    {
      id: '4',
      title: 'Bookmark 4',
      url: 'https://www.google.com',
      categoryId: '2'
    },
    {
      id: '5',
      title: 'Bookmark 5',
      url: 'https://www.google.com',
      categoryId: '2'
    },
    {
      id: '6',
      title: 'Bookmark 6',
      url: 'https://www.google.com',
      categoryId: '2'
    },
    {
      id: '7',
      title: 'Bookmark 7',
      url: 'https://www.google.com',
      categoryId: '1'
    },
  ]

  categories: Category[] = [
    {
      id: '1',
      title: 'Category 1',
    },
    {
      id: '2',
      title: 'Category 2',
    },
  ]
  constructor(private storageService: StorageService) {
   if(!this.storageService.get("bookmarks")){
    this.storageService.set("bookmarks", this.bookmarks);
   }
   if(!this.storageService.get("categories")){
    this.storageService.set("categories", this.categories);
   }
  }
}
