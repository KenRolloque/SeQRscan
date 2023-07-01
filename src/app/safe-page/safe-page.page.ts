import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-safe-page',
  templateUrl: './safe-page.page.html',
  styleUrls: ['./safe-page.page.scss'],
})
export class SafePagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToHome(){
    this.navCtrl.navigateForward('/tabs/tab1');
  }


}
