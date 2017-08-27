import {EmptyObservable} from 'rxjs/observable/EmptyObservable'
import { Frame } from './../models/frame';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FrameService extends GenericService<Frame>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:8000/api/frame/'
   }
  public getAll(): Observable<Frame[]> {
    return super.getAll(this.url)
  }
  public create(frame: Frame): Observable<Frame> {
    return super.create(frame, `${this.url}`)
  }
  public getOne(id: string): Observable<Frame> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(frame: Frame): Observable<Frame> {
    return super.update(frame, `${this.url}${frame.id}`)
  }
  public deleteOne(frame: Frame): Observable<Frame> {
    return super.deleteOne(frame, `${this.url}${frame.id}`)
  }
  public startsWith (data: string): Observable<Frame[]> {
    return this.http.get(`${this.url}startsWith/${data}`)
    .map(res => res.json())
  }
  public search (text: string): Observable<Frame[]> {
    if (text === '' ||text === null) {
      return new EmptyObservable()
    }
    return this.http.get(`${this.url}search/${text}`)
    .map(res => res.json())
  }
}
