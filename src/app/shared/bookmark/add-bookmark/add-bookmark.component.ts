import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/@models/category.interface';
import { v4 as uuidv4, v4 } from 'uuid';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  addBookMarkForm:FormGroup;
  categories: Category[];
  showNewCategoryField: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AddBookmarkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {categories: Category[]},
    private fb: FormBuilder
  ) { 
    console.log(data.categories)
    this.categories = data.categories;
    this.addBookMarkForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      
      url: ['', [Validators.required, Validators.pattern('^https:\/\/[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+\.[a-zA-Z0-9_\-]+$')]],
      // category: [this.categories.length?this.categories[0].id: '', [Validators.required]]
      category: [this.categories.length?this.categories[0].id: '', [Validators.required]],
      newCategoryName: ['', [Validators.required]]
    })
    this.newCategoryName.disable();
  }

  ngOnInit(): void {
   
  }

  get title(): AbstractControl {
    return this.addBookMarkForm.get('title') as AbstractControl;
  }
  get url(): AbstractControl {
    return this.addBookMarkForm.get('url') as AbstractControl;
  }
  get category(): AbstractControl {
    return this.addBookMarkForm.get('category') as AbstractControl;
  }
  get newCategoryName(): AbstractControl {
    return this.addBookMarkForm.get('newCategoryName') as AbstractControl;
  }

  onAddCategoryClick(e: Event){
    e.preventDefault();
    this.newCategoryName.enable();
    this.category.disable();
    this.showNewCategoryField = true;
  }
  submit(){
    if(this.addBookMarkForm.valid){
      console.log(this.addBookMarkForm.value);
      if(this.showNewCategoryField){
        const newCategoryId = v4();
        console.log(this.showNewCategoryField);
        this.dialogRef.close({
          newCategory: {
            id: newCategoryId,
            title: this.addBookMarkForm.value.newCategoryName,
          },
          bookmark: {
            id: v4(),
            title: this.addBookMarkForm.value.title,
            url: this.addBookMarkForm.value.url,
            categoryId: newCategoryId
          }
        })
      }else {
        console.log(this.showNewCategoryField);
        this.dialogRef.close({
          newCategory: null, 
          bookmark: {...this.addBookMarkForm.value, id: v4(), categoryId: this.addBookMarkForm.value.category}
        });
      }
      
    }
  }

}
