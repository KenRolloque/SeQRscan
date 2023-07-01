import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navCtrl: NavController) {}


  inputValue:string ="";
  qrValue:string =""
  showContainer:boolean=false;

  generateQR(){

      if(this.inputValue){
        this.showContainer = true;
        this.qrValue = this.inputValue

      }else{
        this.showContainer = false;
      }
  }


  viewQR(){
    this.navCtrl.navigateForward('/gallery');

  }

}
