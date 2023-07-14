import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google',
  templateUrl: './google.page.html',
  styleUrls: ['./google.page.scss'],
})
export class GooglePage implements OnInit {

  constructor(private router : Router) { }

  goToGoogle(){

    this.router.navigateByUrl('/google-add');
  }

  goToMain(){
    this.router.navigateByUrl('/main');
   
  }

  ngOnInit() {
  }



}
