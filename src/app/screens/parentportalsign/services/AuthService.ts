// import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';
// import { ParentPortalSign } from './parentportalsign'

// import { BehaviorSubject } from 'rxjs';
// import { Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/switchMap';


// @Injectable()
// export class AuthService {

//   user: BehaviorSubject<ParentPortalSign> = new BehaviorSubject(null)

//   constructor(private afAuth: AngularFireAuth,
//               private db: AngularFireDatabase) {


//       this.afAuth.authState
//         .switchMap(auth => {
//           if (auth) {
//             /// signed in
//             return this.db.object('ParentUser/' + auth.uid)
//           } else {
//             /// not signed in
//             return Observable.of(null)
//           }
//         })
//         .subscribe(user => {
//           this.user.next(user)
//         })
//     }


//     ///// SignIn - SignOut Process /////

//     googleLogin() {
//       const provider = new firebase.auth.GoogleAuthProvider()
//       return this.afAuth.auth.signInWithPopup(provider)
//         .then(credential =>  {
//             this.updateUser(credential.user)
//         })
//     }

//     signOut() {
//       this.afAuth.auth.signOut()
//     }

//     //// Update user data ////

//     /// updates database with user info after login
//     /// only runs if user role is not already defined in database
//     private updateUser(authData) {
//       const userData = new ParentPortalSign(authData)
//       const ref = this.db.object('users/' + authData.uid)
//       ref.take(1)
//          .subscribe(user => {
//           if (!user.role) {
//             ref.update(userData)
//           }
//       })

//     }
// }