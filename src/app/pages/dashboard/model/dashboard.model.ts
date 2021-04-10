export interface Dashboard {
  id?: number;
  comments?: number;
  completedOrders?: number;
  events?: number;
  ratings?: number;
  regions?: number;
  users?: {guides?: number; tourists?: number; };
}
