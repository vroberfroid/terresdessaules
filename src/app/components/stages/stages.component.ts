import { Component } from '@angular/core';
import {VariableBackgroundComponent} from '../../base/variable-background.component';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent extends VariableBackgroundComponent {

  constructor() {
    super();
  }

}
