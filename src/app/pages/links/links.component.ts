import { Link } from './../../dto/link.dto';
import { LinkService } from './../../services/link.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.less'],
})
export class LinksComponent implements OnInit {
  displayedColumns: string[] = [
    'url',
    'description',
    'linkStatus',
    'linkCategory',
  ];
  links: Link[] = null;

  constructor(private linkService: LinkService) {}

  ngOnInit(): void {
    this.linkService.getAllLinks().subscribe((links) => {
      this.links = links.map<Link>((link) => {
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
      });
    });
  }
}
