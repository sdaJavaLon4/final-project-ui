import { LinkCategory } from './link-category.dto';

export interface Link {
  id: String;
  url: String;
  description: String;
  linkStatus: String;
  linkCategory: LinkCategory;
}
