import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MdContent} from '../../../models/mdcontent.model';
import {MdContentService} from '../../../services/mdcontent.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  editorForm: FormGroup;

  content = 'Loading...';
  @Input() path: string;
  @Input() field: string;
  @Input() readonly = false;

  subscription: Subscription;
  constructor(private contentService: MdContentService) { }

  ngOnInit() {

    this.editorForm = new FormGroup({
      'field'  : new FormControl(this.content)
    });

    this.contentService.get(this.field, this.path)
      .subscribe( (data: MdContent) => {
        if (data) {
          this.content = data.content;
          this.editorForm.get('field').patchValue(this.content);
        }
    });


    this.subscription = this.editorForm.get('field')
      .valueChanges.subscribe(
        (data) => {
          this.content = data;
        });
  }

  onSubmit(name: string, content: string) {
    this.contentService.update(name, content, this.path).subscribe( responseData => {
      console.log(responseData);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
