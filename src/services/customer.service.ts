import {EmptyObservable} from 'rxjs/observable/EmptyObservable'
import { Customer } from './../models/customer';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService extends GenericService<Customer>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:8000/api/customer/'
   }
  public getAll(): Observable<Customer[]> {
    return super.getAll(this.url)
  }
  public create(customer: Customer): Observable<Customer> {
    return super.create(customer, `${this.url}`)
  }
  public getOne(id: string): Observable<Customer> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(customer: Customer): Observable<Customer> {
    return super.update(customer, `${this.url}${customer.id}`)
  }
  public deleteOne(customer: Customer): Observable<Customer> {
    return super.deleteOne(customer, `${this.url}${customer.id}`)
  }
  /*public startsWith (data: string): Observable<Customer[]> {
    return this.http.get(`${this.url}startsWith/${data}`)
    .map(res => res.json())
  }
  public search (text: string): Observable<Customer[]> {
    if (text === '' ||text === null) {
      return new EmptyObservable()
    }
    return this.http.get(`${this.url}search/${text}`)
    .map(res => res.json())
  }*/
}
