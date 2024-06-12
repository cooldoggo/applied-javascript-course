import { BaseHttpData } from "./baseHttpDara";


export class CarsHttpData extends BaseHttpData {


  constructor(baseUrl) {
    super(baseUrl, "cars");
  } 
}