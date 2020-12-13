import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LinkCategory } from '../dto/link-category.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:8080/link/category';

  constructor(private httpClient: HttpClient) {}

  getAllCategories(showLinks: boolean): Observable<Array<LinkCategory>> {
    return this.httpClient.get<Array<LinkCategory>>(
      `${this.url}/${showLinks}`,
      { withCredentials: true }
    );
  }

  createCategory(name: String): Observable<any> {
    return this.httpClient.post(
      this.url,
      {
        name: name,
      },
      {
        withCredentials: true,
      }
    );
  }

  deleteCategory(id: String): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`, {
      withCredentials: true,
    });
  }
}
