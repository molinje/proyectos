import { Component, ElementRef, OnInit  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2'; 

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public element: ElementRef,
              public af: AngularFireModule) {
              this.element.nativeElement

              }
  
  ngOnInit(){
    var root = this.element.nativeElement;
    console.log(root);
    var loginBtn = root.querySelector('#loginBtn');
    var fbBtn = root.querySelector('#fb-login');
    var twBtn = root.querySelector('#twitter-login');
    loginBtn.addEventListener('click',this.onClick.bind(this));
    fbBtn.addEventListener('click',this.onFacebookLogin.bind(this));
   twBtn.addEventListener('click',this.onTwitterLogin.bind(this));
  //  fbBtn.addEventListener('click',this.onFacebookLogin.bind(this));


  }

  onClick(e){
    console.log("button clicked");
    this.navCtrl.pop();
  }

  onTwitterLogin(){
    console.log('logging with twiter');
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }).then(function(response){
      console.log('login with twitter success', Response);
      this.navCtrl.pop();
    }).catch(function(error){
      console.log(error);
    }) ;
  }
   onFacebookLogin(){
     console.log('logging with facebook'); 
   this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(function(response){
      console.log('login with twitter success', Response);
      this.navCtrl.pop();
   }).catch(function(error){
      console.log(error);
    });


  }
//  ionViewDidLoad() {
//    console.log('ionViewDidLoad LoginPage');
//  }

}
