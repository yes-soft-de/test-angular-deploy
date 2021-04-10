export interface UnAcceptOrder {
  id: number;
  guideName: string;
  touristName: string;
  arriveDate: { timestamp: number };
  city: string;
  cost: string;
  date: { timestamp: number };
  language: string;
  leaveDate: { timestamp: number };
  services: Array<string>;
}
