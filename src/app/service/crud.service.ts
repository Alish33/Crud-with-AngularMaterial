import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { crud } from '../model/crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private af: AngularFirestore, private toast: ToastrService) { }

  dataTo(value: crud) {
    this.af.collection('register').add(value);
    this.toast.success('Success', 'Added to firestore DB', {
      timeOut: 2000,
      progressBar: false
    });
  }

  getAllData() {
    return this.af.collection('register').snapshotChanges();
  }

  removeDbData(id: any) {
    this.af.collection('register').doc(id).delete();
    this.toast.warning('delete', 'Deleted successfully', {
      timeOut: 2000,
      progressBar: false
    })

  }

  getOneData(id: any) {
    return this.af.collection('register').doc(id).get();
  }

  update(id: any, value: crud) {
    this.af.collection('register').doc(id).update(value);
    this.toast.success('Updated', '1 row has been updated', {
      timeOut: 1000,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  }

}

