import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController, ToastController,ActionSheetController  } from '@ionic/angular';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  defaultSize: number=100;
  newSize: number =0;
  constructor(
    private navCtrl: NavController,
    private alertController: AlertController, 
    private toastController: ToastController,
    private actionSheetController: ActionSheetController
    ) { }

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
      icon:'checkmark-circle',
      cssClass: 'custom-toast'
    });
    toast.present();
  }

  async showAlert(){

    const alert = await this.alertController.create({
      header:"Reminder",
      message:"Are you sure you want to delet this QR code?",
      buttons:[{

        text:'Cancel',
        role:'cancel'

      },{
        text:'Okay',
        handler: () =>{
          this.presentToast();
        }
      }
    ]

    })

  }

  

  async downloadToast() {
    const toast = await this.toastController.create({
      message: 'QR Code is Successfully Downloaded ',
      duration: 2000,
      icon:'checkmark-circle',
      position: 'top',
      cssClass: 'download-toast'
    });

   await toast.present();
  }

  async failedDownloadToast() {
    const toast = await this.toastController.create({
      message: 'Enter a size that is greater than '+this.newSize+' ',
      duration: 2000,
      icon:'alert-circle',
      position: 'top',
      cssClass: 'error-toast'
    });
    toast.present();
  }





  changeSize(){
   
    if(this.newSize === 0){
      this.failedDownloadToast()

    }else{
      console.log(this.newSize);
      this.downloadToast();
    }

  }

  getValue(){

      //this.newSize = this.defaultSize;
      console.log(this.defaultSize);

      if (this.defaultSize > 0){
        this.showActionButton();
      }else{

        this.failedDownloadToast();
      }

  }


  async showActionButton(){

    const actionSheet = await this.actionSheetController.create({

      header: 'Options',
      buttons:[
          {
            text:"Download ("+this.defaultSize+"px)",
            handler: () =>{

              this.downloadToast()
            }
          },{
            text:"Delete",
            handler: () =>{

              this.showAlertWithToast()
            }
          },
          {
            text:'Cancel',
            role: 'cancel'
          }

      ]
      

    });

    await actionSheet.present();
  }


}
  
 




