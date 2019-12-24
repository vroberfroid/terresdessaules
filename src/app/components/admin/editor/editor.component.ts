import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  nousForm: FormGroup;

  marie = '# Originaire';
  subscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.nousForm = new FormGroup({
      'marie'  : new FormControl(this.marie),
      'cedric': new FormControl(null),
      'kids' : new FormControl(null)});

    this.subscription = this.nousForm.get('marie')
      .valueChanges.subscribe(
        (data) => {
          this.marie = data;
        });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
