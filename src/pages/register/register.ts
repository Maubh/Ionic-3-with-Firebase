
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private alert: AlertController,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }


  register(user: User) {
    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
     if (result){
      this.alert.create({
        title: 'Ussuário criado com sucesso!', 
        subTitle: 'Acesse o app com os dados cadastrados.',
        buttons: ['OK']
        
      }).present();
       this.navCtrl.pop();
    }
   

    }
    catch (e) {
      console.error(e);

    }

  }

}
