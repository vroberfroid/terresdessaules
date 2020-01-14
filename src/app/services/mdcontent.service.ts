import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MdContent} from '../models/mdcontent.model';

@Injectable({providedIn: 'root'})
export class MdContentService {

  url = 'http://localhost:8080/content';

  constructor(private http: HttpClient) {
  }

  get(name: string): Observable<MdContent> {
    return this.http.get<MdContent>(this.url + '?name=' + name);
  }

  update(name: string, content: string): Observable<MdContent> {
    const postData = {'name' : name, 'content': content};
    return this.http.put<MdContent>(this.url + '/update', postData);
  }
}
