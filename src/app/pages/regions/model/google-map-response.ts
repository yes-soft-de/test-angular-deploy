import { GoogleMap } from "./google-map";

export interface GoogleMapResponse {
    predictions: GoogleMap[]; 
    status: string;
}