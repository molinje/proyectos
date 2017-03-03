import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2'; 
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';




  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyA3UffagPi31lpbBlGeYet_ncUtp3Uksmk",
    authDomain: "product-app-j.firebaseapp.com",
    databaseURL: "https://product-app-j.firebaseio.com",
    storageBucket: "product-app-j.appspot.com",
    messagingSenderId: "823436373488"
  };




@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
