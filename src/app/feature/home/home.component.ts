import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { Bookmark } from 'src/app/@models/bookmark.interface';
import { Category } from 'src/app/@models/category.interface';
import { BookmarkService } from 'src/app/@services/bookmark.service';
import { AddBookmarkComponent } from 'src/app/shared/bookmark/add-bookmark/add-bookmark.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories:Category[] = []
  categories$:Observable<Category[]> = this.bookmarkService.getAllCategories$().pipe(tap(data=>console.log(data)));
   
  constructor(private bookmarkService: BookmarkService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categories = this.bookmarkService.getCategories();
  }
  addBookmark() {
    return;
  }
  showDetails(bookmark: Bookmark) {
    return;
  }

  openBookmarkForm(){

    this.dialog.open(AddBookmarkComponent, {
      width: '500px',
      disableClose: true,
      data: {
        categories: this.categories,
      }
    }).afterClosed().subscribe(({newCategory, bookmark}) => {
      console.log(bookmark);
      if(newCategory){
        console.log(newCategory)
        this.bookmarkService.addCategory(newCategory);
      }
      console.log(newCategory)
      this.bookmarkService.addBookmark(bookmark);
    })
  }

}
