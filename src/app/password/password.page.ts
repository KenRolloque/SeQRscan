import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToGoogle(){
    this.router.navigateByUrl('/google')
  }

  inputValue_password: string="";
  inputValue_confirm:string =""; 
  showError: boolean = false;

  goToMain() {
    if (!this.inputValue_password || this.inputValue_password !== this.inputValue_confirm ||!this.inputValue_confirm) {
      this.showError = true;
    } else {
      this.showError = false;
      this.inputValue_password ="";
      this.inputValue_confirm ="";
      this.router.navigateByUrl('/main');
    }
  }

}
