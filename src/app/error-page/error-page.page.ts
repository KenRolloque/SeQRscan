import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.page.html',
  styleUrls: ['./error-page.page.scss'],
})
export class ErrorPagePage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  async showCustomAlert() {
    const alert = await this.alertController.create({
      header: 'Custom Alert',
      message: 'The encoded URL has been flagged by system as potentially malicious. We recommend you not to visit the site. Do you still want to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'cancel-button'
      },{
        text: 'Continue',
        role: 'continue',
        cssClass:'cont-button'
      }
      ],
      cssClass: 'custom-alert' // CSS class to customize the alert
    });

    await alert.present();
  }

  goToHome(){
    this.navCtrl.navigateForward('/main/scan');
  }
  ngOnInit() {
  }

}
