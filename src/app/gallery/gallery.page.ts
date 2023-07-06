import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController, 
    private toastController: ToastController) { }

  ngOnInit() {
  }
  // goToHome(){
  //   this.navCtrl.navigateForward('/main/tab1');
  // }


  async showAlertWithToast() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Are you sure you want to delete this QR code?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Canceled');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'QR Code is Successfully Deleted',
      duration: 2000,
      position: 'top',
      cssClass: 'custom-toast'
    });
    toast.present();
  }


}
