import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MdContent} from '../models/mdcontent.model';
import {RightService} from './shared/right.service';
import {exhaustMap, take} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MdContentService {

  url = 'https://terre-des-saules.firebaseio.com/';

  constructor(private http: HttpClient,
              private rightService: RightService) {
  }

  get(field: string, path: string): Observable<MdContent> {
    return this.http.get<MdContent>(this.url + path + '/' + field + '.json');
  }

  update(field: string, content: string, path: string): Observable<MdContent> {
    const postData = {'content': content};
    return this.rightService.user.pipe(take(1),
      exhaustMap(user => {
        const token = user ? user.token : null;
        return this.http.put<MdContent>(this.url + path + '/' + field + '.json', postData, {
          params: new HttpParams().set('auth', token)
        });
      }));
  }
}
