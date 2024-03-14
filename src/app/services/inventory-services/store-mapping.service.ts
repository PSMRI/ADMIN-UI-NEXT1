/*
 * AMRIT – Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

// import { InterceptedHttp } from '../../http.interceptor';
import { ConfigService } from '../config/config.service';
// import { SecurityInterceptedHttp } from '../../http.securityinterceptor';

@Injectable()
export class StoreMappingService {
  adminBaseUrl: string;

  constructor(
    private http: HttpClient,
    public basepaths: ConfigService,
  ) {
    this.adminBaseUrl = this.basepaths.getAdminBaseUrl();
  }

  getAllStore(serviceMapID: any) {
    const getStoreUrl = this.adminBaseUrl + 'getMapStore';
    return this.http.post(getStoreUrl, { providerServiceMapID: serviceMapID });
    // .map(this.extractData)
    // .catch(this.handleError)
  }

  getAllParkingPlace(serviceMapID: any) {
    const getStoreUrl =
      this.adminBaseUrl + 'parkingPlaceMaster/getParkingPlaces';
    return this.http.post(getStoreUrl, { providerServiceMapID: serviceMapID });
    // .map(this.extractData)
    // .catch(this.handleError)
  }

  getAllVan(facilityID: any) {
    const getStoreUrl = this.adminBaseUrl + 'vanMaster/getVanFromFacilityID';
    return this.http.post(getStoreUrl, { facilityID });
    // .map(this.extractData)
    // .catch(this.handleError)
  }

  postStoreMapping(storeMapping: any) {
    const postUOMUrl = this.adminBaseUrl + 'mapStore';
    return this.http.post(postUOMUrl, storeMapping);
    // .map(this.extractData)
    // .catch(this.handleError)
  }

  deleteMapping(store: any) {
    const toggleDeletedUrl = this.adminBaseUrl + 'deleteMapStore';
    return this.http.post(toggleDeletedUrl, store);
    // .map(this.extractData)
    // .catch(this.handleError)
  }

  // private extractData(res: Response) {
  //   if (res.json().data && res.json().statusCode == 200) {
  //     return res.json().data;
  //   } else {
  //     return Observable.throw(res.json());
  //   }
  // }

  // private handleError(error: Response | any) {
  //   return Observable.throw(error.json());
  // }
}
