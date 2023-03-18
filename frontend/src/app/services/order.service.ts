import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { firstValueFrom } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products: ProductResponseModel[] = [];
  serverURL = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(`${this.serverURL}orders/${orderId}`);
  }
}

interface ProductResponseModel {
  id: number;
  title: string;
  price: number;
  quantityOrdered: number;
  image: string;
}
