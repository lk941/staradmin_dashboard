import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Child } from '../../child-model/child';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent {


  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<DialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

    var deta = { ...data }
    this.local_data = deta.obj;
    this.action = deta.action;
    console.log(this.action);
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


}
