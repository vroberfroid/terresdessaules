import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MdContent} from '../../../models/mdcontent.model';
import {MdContentService} from '../../../services/mdcontent.service';
import {Observable, Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup} from '@angular/forms';
import {DialogEditorComponent} from '../dialog-editor/dialog-editor.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.component.html',
  styleUrls: ['./image-editor.component.scss']
})
export class ImageEditorComponent implements OnInit, OnDestroy {

  @Input() label: string;
  @Input() field: string;
  @Input() readonly = false;
  path = 'images';
  editorForm: FormGroup;
  displayImage = false;
  url: string;
  subscription: Subscription;

  constructor(private contentService: MdContentService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'url'  : new FormControl()
    });

    this.contentService.get(this.field, this.path)
      .subscribe((data: MdContent) => {
        if (data) {
          this.editorForm.get('url').setValue(data.content);
        }
      }, error => this.openSnackBar('Problème technique: impossible de visualiser les données.'));

    this.subscription = this.editorForm.get('url')
      .valueChanges.subscribe(
        (data) => {
          this.url = data;
        });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(field: string, content: string) {
    this.contentService.update(field, content, this.path).subscribe( responseData => {
      console.log(responseData);
    }, error => this.openSnackBar('Problème technique: impossible de mettre à jour.'));
  }

  private openSnackBar(message: string): Observable<void> {
    const snackBarRef = this.snackBar.open(message, 'OK');
    return snackBarRef.onAction();
  }

  openDialog(): void {
    const mdContent = new MdContent();
    mdContent.content = this.editorForm.get('url').value;
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

  toggleImage() {
    this.displayImage = !this.displayImage;
  }
}
