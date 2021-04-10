export interface Guide {
  id?: number;
  city?: Array<string>;
  image?: string;
  language?: Array<string>;
  name?: string;
  rating?: number;
  regions?: [
    {
      id?: number;
      name?: string;
      description?: string;
      location?: Array<string>;
      placeId?: string;
    }
  ];
  status?: string;
  user?: string;
  userID?: string;
}
