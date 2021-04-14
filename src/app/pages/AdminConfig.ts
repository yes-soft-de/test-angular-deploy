import { environment } from "src/environments/environment.prod";

export class AdminConfig {
  // An Example | Delete The Content When Started
  // source api
  // public static sourceAPI                   = 'http://turkey-app.yes-cloud.de/html/public/index.php/';0
  public static sourceAPI                   = environment.sourceAPI;
  // public static sourceAPI                   = 'http://localhost:8000/';

  // Login
  public static loginAPI                    = AdminConfig.sourceAPI + 'login_check';

  // Dashboard
  public static dashboardStatisticAPI       = AdminConfig.sourceAPI + 'statistics';


  // Admins
  public static adminsAPI                   = AdminConfig.sourceAPI + 'getadministrators';
  public static createAdminAPI              = AdminConfig.sourceAPI + 'createadmin';
  public static deleteAdminAPI              = AdminConfig.sourceAPI + 'deleteadmin';


  // Regions
  public static regionsAPI                  = AdminConfig.sourceAPI + 'regions';
  public static regionAPI                   = AdminConfig.sourceAPI + 'region';
  public static updateRegionAPI             = AdminConfig.sourceAPI + 'updateRegion';

  // Events
  public static eventsAPI                   = AdminConfig.sourceAPI + 'events';
  public static eventAPI                    = AdminConfig.sourceAPI + 'event';

  // Guides
  public static guidesAPI                   = AdminConfig.sourceAPI + 'guides';
  public static guideByIdAPI                = AdminConfig.sourceAPI + 'guidebyid';
  public static updateGuideAPI              = AdminConfig.sourceAPI + 'guidbyadminupdate';

  // Accepted Orders
  public static allUnacceptedOrdersAPI      = AdminConfig.sourceAPI + 'allunacceptedorders';
  public static allAcceptedOrdersAPI        = AdminConfig.sourceAPI + 'acceptedordersbystatus';

  // Google Map
  public static googleMapTokenAPI           = AdminConfig.sourceAPI + environment.googleTokenAPI;
  public static googleMapSearchAPI          = 'https://maps.googleapis.com/maps/api/place/autocomplete/';
  public static googleMapPlaceDetailsAPI    = 'https://maps.googleapis.com/maps/api/place/details/';

  // Upload
  public static generalUploadAPI            = AdminConfig.sourceAPI + 'uploadfile';
}
