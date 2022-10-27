import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bookmark } from '../@models/bookmark.interface';
import { Category } from '../@models/category.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  selectedBookmarkId: BehaviorSubject<string> = new BehaviorSubject('');
  allBookmarks = this.storage.get('bookmarks')
  allBookmarks$: BehaviorSubject<Bookmark[]> = new BehaviorSubject(this.allBookmarks);
  allCategories = this.storage.get('categories')
  allCategories$: BehaviorSubject<Category[]> = new BehaviorSubject( this.storage.get('categories'));
  constructor( private storage: StorageService) {

   }
  getSelectedBookmarkId(): Observable<string> {
    return this.selectedBookmarkId.asObservable();
  }
  getBookmarks(): Observable<Bookmark[]> {
    return this.allBookmarks$.asObservable();
  }
  updateSelectedBookmarkId(id: string) {
    this.selectedBookmarkId.next(id);
  }

  getBookmarksByCategoryId(id:string): Bookmark[] {
    if(this.allBookmarks.length > 0) {
      return this.allBookmarks.filter((bookmark: Bookmark) => bookmark.categoryId === id);
    }
    return [];
  }
  getBookmarkById(id: string): Bookmark | null{
    if(this.allBookmarks.length > 0) {
      const bookmark = this.allBookmarks.find((bookmark: Bookmark) => bookmark.id === id);
      return bookmark? bookmark: null;
    }
    return null;
  }
  getCategories(): Category[] {
    if(this.allCategories.length > 0) {
      return this.allCategories;
    }
    return [];
  }

  getAllCategories$(): Observable<Category[]> {
    return this.allCategories$.asObservable();
  }

  addCategory(category: Category) {
    if(Object.keys(category).length>0){
      this.allCategories.push(category);
      this.storage.set('categories', this.allCategories);
      this.allCategories$.next(this.allCategories);
      return;
    }
  }

  addBookmark(bookmark: Bookmark) {
    if(Object.keys(bookmark).length>0){
      this.allBookmarks.push(bookmark);
      this.storage.set('bookmarks', this.allBookmarks);
      this.allBookmarks$.next(this.allBookmarks);
    }
  }
}
