import { Component, OnInit } from '@angular/core';
import {MdContentService} from '../../services/mdcontent.service';
import {MdContent} from '../../models/mdcontent.model';

@Component({
  selector: 'app-nous',
  templateUrl: './nous.component.html',
  styleUrls: ['./nous.component.scss']
})
export class NousComponent implements OnInit {

  constructor(private contentService: MdContentService) { }

  ngOnInit() {
  }

  getText(field: string) {
    this.contentService.get(field, 'nous')
      .subscribe( (data: MdContent) => {
        return data.content;
      });
  }

}
