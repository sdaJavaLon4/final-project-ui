import { UiService } from './../../services/ui.service';
import { CreateCategoryDialogComponent } from './create-category-dialog/create-category-dialog.component';
import { LinkService } from './../../services/link.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { LinkCategory } from 'src/app/dto/link-category.dto';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Link } from 'src/app/dto/link.dto';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['name'];
  categories: LinkCategory[] = null;
  expandedElement: LinkCategory | null;

  constructor(
    private categoryService: CategoryService,
    private linkService: LinkService,
    private dialog: MatDialog,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  openCreateCategoryDialog() {
    const dialogRef = this.dialog.open(CreateCategoryDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.fetchCategories();
    });
  }

  deleteCategory(event: MouseEvent, categoryId: String) {
    event.stopPropagation();
    this.categoryService
      .deleteCategory(categoryId)
      .subscribe(() => this.fetchCategories());
  }

  private fetchCategories() {
    this.uiService.isLoading.next(true);
    this.categoryService.getAllCategories(true).subscribe((categories) => {
      this.categories = categories;
      this.categories.forEach((category) => {
        if (category.links.length > 0) {
          category.links = (category.links as Link[]).map<Link>(
            this.linkService.correctLink
          );
        }
        this.uiService.isLoading.next(false);
      });
    });
  }
}
