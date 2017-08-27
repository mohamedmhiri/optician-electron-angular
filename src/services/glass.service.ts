import {EmptyObservable} from 'rxjs/observable/EmptyObservable'
import { Glass } from './../models/glass';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GlassService extends GenericService<Glass>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:8000/api/glass/'
   }
  public getAll(): Observable<Glass[]> {
    return super.getAll(this.url)
  }
  public create(glass: Glass): Observable<Glass> {
    return super.create(glass, `${this.url}`)
  }
  public getOne(id: string): Observable<Glass> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(glass: Glass): Observable<Glass> {
    return super.update(glass, `${this.url}${glass.id}`)
  }
  public deleteOne(glass: Glass): Observable<Glass> {
    return super.deleteOne(glass, `${this.url}${glass.id}`)
  }
  public startsWith (data: string): Observable<Glass[]> {
    return this.http.get(`${this.url}startsWith/${data}`)
    .map(res => res.json())
  }
  public search (text: string): Observable<Glass[]> {
    if (text === '' ||text === null) {
      return new EmptyObservable()
    }
    return this.http.get(`${this.url}search/${text}`)
    .map(res => res.json())
  }
}
