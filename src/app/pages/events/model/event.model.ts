export interface Events {
  id?: number;
  name?: string;
  commentNumber?: number;
  comments?: [
    {
      comment: string;
      date: { timestamp: number };
      roles: Array< string>;
      userImage: string;
      userName: string;
    }
  ];
  date?: { timestamp: number };
  description?: string;
  images?: {
    baseURL?: string;
    image?: string;
    imageURL?: string;
  };
  location?: string;
  status?: string;
  subType?: string;
  type?: string;
}
