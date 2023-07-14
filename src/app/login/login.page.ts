import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

    }
  

    // goToMain(){
    //   this.router.navigateByUrl('/main')
    // }

    goToGoogle(){
      this.router.navigateByUrl('/google')
    }
  
    inputValue_email: string="";
    inputValue_pass:string =""; 
    showError: boolean = false;

    goToMain() {
      if (!this.inputValue_email || this.inputValue_email.trim() === '' ||!this.inputValue_pass || this.inputValue_pass.trim() === '') {
        this.showError = true;
      } else {
        this.showError = false;
        this.inputValue_email ="";
        this.inputValue_pass ="";
        this.router.navigateByUrl('/main');
      }
    }

}
