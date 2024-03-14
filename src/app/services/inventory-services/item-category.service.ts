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
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import { InterceptedHttp } from '../../http.interceptor';
import { ConfigService } from '../config/config.service';
// import { SecurityInterceptedHttp } from '../../http.securityinterceptor';
@Injectable()
export class ItemCategoryService {
  adminBaseUrl: any;
  getAllItemCategoryURL: any;
  setCategoryStatusURL: any;
  createNewCategoryURL: any;
  editCategoryURL: any;

  constructor(
    private http: HttpClient,
    public basepaths: ConfigService,
  ) {
    this.adminBaseUrl = this.basepaths.getAdminBaseUrl();
  }

  getAllItemCategory(providerServiceMapID: any) {
    this.getAllItemCategoryURL = `${this.adminBaseUrl}getItemCategory/${providerServiceMapID}/0`;
    console.log(this.getAllItemCategoryURL);
    return this.http.get(this.getAllItemCategoryURL);
    // .map((res) => res.json());
  }

  categoryActivationDeactivation(categoryId: any, flag: any) {
    this.setCategoryStatusURL = `${this.adminBaseUrl}blockItemCategory`;
    return this.http.post(this.setCategoryStatusURL, {
      itemCategoryID: categoryId,
      deleted: flag,
    });
    // .map((res) => res.json());
  }

  saveNewCategory(reqObj: any) {
    this.createNewCategoryURL = `${this.adminBaseUrl}createItemCategories`;
    return this.http.post(this.createNewCategoryURL, reqObj);
    // .map((res) => res.json());
  }

  editItemCategory(reqObj: any) {
    this.editCategoryURL = `${this.adminBaseUrl}editItemCategory`;
    return this.http.post(this.editCategoryURL, reqObj);
    // .map(res => res.json());
  }
}
