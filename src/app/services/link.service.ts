import { LinkCategory } from './../dto/link-category.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../dto/link.dto';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private url = 'http://localhost:8080/link';

  constructor(private httpClient: HttpClient) {}

  getAllLinks(): Observable<Array<Link>> {
    return this.httpClient.get<Array<Link>>(this.url, {
      withCredentials: true,
    });
  }

  correctLink(link: Link) {
    if (!link.url.includes('https')) {
      return {
        id: link.id,
        url: `https://${link.url}`,
        description: link.description,
        linkStatus: link.linkStatus,
        linkCategory: link.linkCategory,
      };
    }
    return link;
  }
}
