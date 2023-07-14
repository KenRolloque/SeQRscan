import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  setSize: number =100;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private router: Router

    ) {}

  inputValue:string ="";
  qrValue:string =""
  showContainer:boolean=false;

  descValue:string ="";

  ngOnInit() {
    
  }

  
  generateQR(){

    if(this.inputValue){
      this.showContainer = true;
      this.qrValue = this.inputValue

    }else{
      this.showContainer = false;
    }
}


clearField(){
  this.inputValue = "";
  this.showContainer = false;
}

clearQR(){
  // this.navCtrl.navigateForward('/gallery');
  this.inputValue = "";
  this.showContainer = false;

  if (!this.descValue ){
  
  }else{
    this.showAddedToast();
  }



}





// Show Download Toast

async showAddedToast(){
  
  const toast = await this.toastController.create({

    message: 'QR Code is successfully added.',
    duration: 2000,
    position: 'top',
    icon:'checkmark-circle',
    cssClass: 'custom-toast'
  });
  toast.present();
}




goToSize(){

  this.router.navigateByUrl('/size');
}

}
