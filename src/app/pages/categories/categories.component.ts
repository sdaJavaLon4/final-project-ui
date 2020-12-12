import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { LinkCategory } from 'src/app/dto/link-category.dto';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
})
export class CategoriesComponent implements OnInit {
  // TODO: set displayed columns
  displayedColumns: string[] = [
    'sport',
    'health',
    'cooking',
    'parental',
  ];
  categories: LinkCategory[] = null;
 

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories(true).subscribe()
    
    // TODO: call method from categoryService
  }
}
