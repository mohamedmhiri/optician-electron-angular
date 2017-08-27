import {EmptyObservable} from 'rxjs/observable/EmptyObservable'
import { Payment } from './../models/payment';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService extends GenericService<Payment>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:8000/api/payment/'
   }
  public getAll(): Observable<Payment[]> {
    return super.getAll(this.url)
  }
  public create(payment: Payment): Observable<Payment> {
    return super.create(payment, `${this.url}`)
  }
  public getOne(id: string): Observable<Payment> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(payment: Payment): Observable<Payment> {
    return super.update(payment, `${this.url}${payment.id}`)
  }
  public deleteOne(payment: Payment): Observable<Payment> {
    return super.deleteOne(payment, `${this.url}${payment.id}`)
  }
  public startsWith (data: string): Observable<Payment[]> {
    return this.http.get(`${this.url}startsWith/${data}`)
    .map(res => res.json())
  }
  public search (text: string): Observable<Payment[]> {
    if (text === '' ||text === null) {
      return new EmptyObservable()
    }
    return this.http.get(`${this.url}search/${text}`)
    .map(res => res.json())
  }
}
