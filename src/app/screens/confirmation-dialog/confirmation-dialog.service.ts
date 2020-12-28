import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

 confirm(
    title: string,
    message: string,
    btnDeleteText: string = 'Delete',
    btnCancelText: string = 'Cancel',
    //dialogSize: 'sm'|'lg' = 'lg'
    ): Promise<boolean> {
    // const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
    const modalRef = this.modalService.open(ConfirmationDialogComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnDeleteText = btnDeleteText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }
}
