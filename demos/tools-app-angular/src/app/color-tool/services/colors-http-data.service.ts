import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseData } from "../../shared/services/base-data";
import { Color, NewColor } from "../models/colors";


@Injectable({
  providedIn: "root",
})
export class ColorsHttpDataService extends BaseData<Color, NewColor> {

  constructor(httpClient: HttpClient) {
    super(httpClient, "colors");
  }
}

