import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MdContent} from '../../../models/mdcontent.model';
import {MdContentService} from '../../../services/mdcontent.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  nousForm: FormGroup;

  marie = 'Loading...';
  subscription: Subscription;
  constructor(private contentService: MdContentService) { }

  ngOnInit() {

    this.nousForm = new FormGroup({
      'marie'  : new FormControl(this.marie),
      'cedric': new FormControl(null),
      'kids' : new FormControl(null)});

    this.contentService.get('marie')
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

  onSubmit(name: string, content: string) {
    this.contentService.update(name, content).subscribe( responseData => {
      console.log(responseData);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
