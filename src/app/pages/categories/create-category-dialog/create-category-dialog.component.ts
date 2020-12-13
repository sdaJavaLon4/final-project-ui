import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.less'],
})
export class CreateCategoryDialogComponent implements OnInit {
  createCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    public categoryService: CategoryService,
    private dialogRef: MatDialogRef<CreateCategoryDialogComponent>
  ) {}

  ngOnInit(): void {}

  createCategory() {
    const categoryname = this.createCategoryForm.get('name').value;
    this.categoryService
      .createCategory(categoryname)
      .subscribe(() => this.dialogRef.close());
  }
}
