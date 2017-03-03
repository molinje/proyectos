import { Component } from '@angular/core';


import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    window.localStorage.removeItem('user');
     

    if(!this.isAlreadyLoggedIn()){
      console.log('not login yet');
      this.navCtrl.push(LoginPage);
      //return user !== null && user !== undefined;
    }
   }

   isAlreadyLoggedIn(){
     let user = window.localStorage.getItem('user');
     return user !== null && user !== undefined;

   }
    


}
