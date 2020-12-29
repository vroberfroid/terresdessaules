import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MdContent} from '../models/mdcontent.model';

@Injectable({providedIn: 'root'})
export class MdContentService {

  url = 'https://terre-des-saules.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  get(name: string, path: string): Observable<MdContent> {
    return this.http.get<MdContent>(this.url + path + '/' + name + '.json');
  }

  update(name: string, content: string, path: string): Observable<MdContent> {
    const postData = {'content': content};
    return this.http.put<MdContent>(this.url + path + '/' + name + '.json', postData);
  }
}
