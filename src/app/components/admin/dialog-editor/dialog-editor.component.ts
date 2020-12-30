import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MdContent} from '../../../models/mdcontent.model';

@Component({
  selector: 'app-dialog-editor',
  templateUrl: './dialog-editor.component.html',
  styleUrls: ['./dialog-editor.component.scss']
})
export class DialogEditorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MdContent) { }

  ngOnInit() {
  }

  onClick() {
    console.log('Yes clicked');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
