import { Guide } from "../../guides/model/guide.model";

export interface Region {
  id?: number;
  name?: string;
  description?: string;
  location?:  string;
  commentNumber?: number;
  ratingAverage?: number;
  path?: [
      {
          path:  string;
          pathURL:  string;
          baseURL:  string;
      }
  ],
  placeId?: string;
  regionImage?: [
    {
        baseURL: string;
        path:  string;
        pathURL: string;
    }
];
guides: Guide[];
comments: [
    {
        comment: string
        date: { timestamp: number; };
        roles: Array<string>;
        userImage: string;
        userName: string;
    }
];
userRating?: number;
}
