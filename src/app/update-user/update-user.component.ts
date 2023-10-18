import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      user: User;
    },
    public dialogRef: MatDialogRef<UpdateUserComponent>
  ) {}

  userInfo: User = this.data.user;

  // FUNCTION TO CLOSE DIALOG/MODAL

  onSaveClick(): void {
    this.dialogRef.close();
  }
}
