import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private navCtrl: NavController) {}

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


clearQR(){
  // this.navCtrl.navigateForward('/gallery');
  this.inputValue = "";
  this.showContainer = false;

}


add(){

    if(this.descValue){
      
    }
}

}
