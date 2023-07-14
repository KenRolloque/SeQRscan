import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {


  toogleState :boolean = false;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goToError() {
    this.navCtrl.navigateForward('/error-page');
  }

  goToSafe(){
    this.navCtrl.navigateForward('/safe-page');
  }

  goToMessage(){
    this.navCtrl.navigateForward('/message');
  }

}
