import { Component, Input, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Bookmark } from 'src/app/@models/bookmark.interface';
import { BookmarkService } from 'src/app/@services/bookmark.service';


@Component({
  selector: 'bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {
  @Input() categoryId!: string;
  bookmarksByCategory: Bookmark[] = [];
  filteredBookmarks$: any;
  constructor(
    private bookMarkService: BookmarkService
  ) { }

  ngOnInit(): void {
    this.filteredBookmarks$ = this.getBookmarksByCategory(this.categoryId);
  }

  getBookmarksByCategory(categoryId:string): Observable<Bookmark[]> {
    return this.bookMarkService.getBookmarks().pipe(
      map((bookmarks: Bookmark[]) => {
        if(bookmarks.length > 0){
          return bookmarks.filter((bmk: Bookmark) => bmk.categoryId === categoryId);
        } return [];
    }))
  }

  onDetailsClick(bookmarkId: string){
    // console.log(bookmarkId)
    this.bookMarkService.updateSelectedBookmarkId(bookmarkId);
  }

}
