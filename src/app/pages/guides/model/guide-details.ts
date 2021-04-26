export interface GuideDetails {
  id: number;
  baseURL: string;
  city?: Array<string>;
  cities?: Array<string>;
  image: string;
  imageURL: string;
  language: Array<string>;
  myOrders: [
    {
      arriveDate: { timestamp: number };
      city: string;
      cost: number;
      date: { timestamp: number };
      guidUserID: string;
      id: number;
      language: string;
      leaveDate: { timestamp: number };
      roomID: string;
      services: Array<string>;
      status: string;
      touristUserID: string;
      uuid: string;
    }
  ];
  name: string;
  rating: number;
  status: string;
  user: string;
}
