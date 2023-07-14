import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-google-pass',
  templateUrl: './google-pass.page.html',
  styleUrls: ['./google-pass.page.scss'],
})
export class GooglePassPage implements OnInit {
  inputValue: string="";
  showError: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToConfirm() {
    if (!this.inputValue || this.inputValue.trim() === '') {
      this.showError = true;
    } else {
      this.showError = false;
      this.router.navigateByUrl('/password');
      this.inputValue ="";
    }
  }
}
