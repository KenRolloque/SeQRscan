import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.page.html',
  styleUrls: ['./error-page.page.scss'],
})
export class ErrorPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToHome(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }
}
