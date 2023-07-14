import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-size',
  templateUrl: './size.page.html',
  styleUrls: ['./size.page.scss'],
})
export class SizePage implements OnInit {

  setSize: number = 100;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
  }


  saveAction(){

      console.log(this.setSize)
    if (this.setSize > 99){
      this.presentToast();

      setTimeout(() => {
        this.router.navigateByUrl('/main/create');
      }, 2000);

    }else{
      this.failedDownloadToast();
    }

  }

  goToBack(){
    this.router.navigateByUrl('/main/create');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'QR Code is successfully downloaded',
      duration: 2000,
      position: 'top',
      icon:'checkmark-circle',
      cssClass: 'custom-toast'
    });
    toast.present();
  }

  async failedDownloadToast() {
    const toast = await this.toastController.create({
      message: 'Enter a size that is greater than '+this.setSize+' ',
      duration: 2000,
      icon:'alert-circle',
      position: 'top',
      cssClass: 'error-toast'
    });
    toast.present();
  }

}
