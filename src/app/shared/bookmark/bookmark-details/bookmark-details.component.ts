import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/@models/bookmark.interface';
import { Category } from 'src/app/@models/category.interface';
import { BookmarkService } from 'src/app/@services/bookmark.service';


@Component({
  selector: 'bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.scss']
})
export class BookmarkDetailsComponent implements OnInit {
  // @Input() categoryId: string ='';
  // @Input() categoryTitle: string = '';
  selectedBookmark: Bookmark = {} as Bookmark;
  category!: Category;

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarkService.getSelectedBookmarkId().subscribe((bookmarkId: string) => {
      // console.log(bookmarkId);
      if(bookmarkId){
        this.selectedBookmark = this.bookmarkService.getBookmarkById(bookmarkId)!;
        this.category = this.bookmarkService.getCategories().find((category: Category) => category.id === this.selectedBookmark.categoryId)!;
      }else {
        this.selectedBookmark = {} as Bookmark;
      }
    })
  }

}
