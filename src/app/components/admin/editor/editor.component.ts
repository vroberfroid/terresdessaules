import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {MdContent} from '../../../models/mdcontent.model';
import {MdContentService} from '../../../services/mdcontent.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditorComponent} from '../dialog-editor/dialog-editor.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  constructor(private contentService: MdContentService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

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
    }, error => this.openSnackBar('Problème technique: impossible de visualiser les données.'));


    this.subscription = this.editorForm.get('field')
      .valueChanges.subscribe(
        (data) => {
          this.content = data;
        });
  }

  onSubmit(field: string, content: string) {
    this.contentService.update(field, content, this.path).subscribe( responseData => {
      console.log(responseData);
    }, error => this.openSnackBar('Problème technique: impossible de mettre à jour.'));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  openDialog(): void {
    const mdContent = new MdContent();
    mdContent.content = this.content;
    mdContent.field = this.field;
    const dialogRef = this.dialog.open(DialogEditorComponent, {
      width: '250px',
      data: mdContent
    });

    dialogRef.afterClosed().subscribe((result: MdContent) => {
      if (result) {
        this.onSubmit(result.field, result.content);
        console.log('The dialog was closed. result=' + result);
      }
    });
  }

  private openSnackBar(message: string): Observable<void> {
    const snackBarRef = this.snackBar.open(message, 'OK');
    return snackBarRef.onAction();
  }
}
