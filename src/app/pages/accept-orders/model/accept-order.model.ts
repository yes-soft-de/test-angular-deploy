export interface AcceptOrder {
  id?: number;
  cost?: string;
  date?: { timestamp?: number; };
  guideName?: string;
  order?: {
    id?: number;
    arriveDate?: { timestamp?: number; };
    city?: string;
    cost?: string;
    date?: { timestamp?: number; };
    guidUserID?: string;
    language?: string;
    leaveDate?: { timestamp?: number; };
    roomID?: string;
    services?: Array<string>
    status?: string;
    touristUserID?: string;
  };
  touristName?: string;
}
