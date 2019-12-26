import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MdContent} from '../../../models/mdcontent.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  url = 'http://localhost:8080/content';
  nousForm: FormGroup;

  marie = '# Originaire';
  subscription: Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.nousForm = new FormGroup({
      'marie'  : new FormControl(this.marie),
      'cedric': new FormControl(null),
      'kids' : new FormControl(null)});

    this.http.get<MdContent>(this.url + '?name=marie')
      .subscribe( (data: MdContent) => {
        this.marie = data.content;
        this.nousForm.get('marie').patchValue(this.marie);
    });


    this.subscription = this.nousForm.get('marie')
      .valueChanges.subscribe(
        (data) => {
          this.marie = data;
        });
  }

  onSubmit(postData: {name: string, content: string}) {
    this.http.put(this.url + '/update', postData).subscribe( responseData => {
      console.log(responseData);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
