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

  getAllCategories(showLinks: boolean):Observable<Array<LinkCategory>> {
    // TODO: implement http communication as is link service, url: `${this.url}/${showLinks}`
    return this.httpClient.get<Array<LinkCategory>>( `${this.url}/${showLinks}`)
  };
}
