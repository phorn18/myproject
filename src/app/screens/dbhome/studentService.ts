import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject }
  from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  stdList: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase,
    private ngFirestore: AngularFirestore) { }

  getDataList() { //read
    return this.ngFirestore.collection('student').snapshotChanges();
  }

  // Create
  createStudent(tmpstd: any) {
    return this.ngFirestore.collection('student').add(tmpstd);
  }

  //delete
  deleteStudent(delid) {
    return this.ngFirestore.doc('student/'+delid).delete();
  }
  updateUser(getid, updatedata: any) {
    return this.ngFirestore.doc('student/'+getid).update(updatedata);
  }

}