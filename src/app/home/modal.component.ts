import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['./home.component.scss']
})
export class Modal {

    constructor(
        public dialogRef: MatDialogRef<Modal>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}