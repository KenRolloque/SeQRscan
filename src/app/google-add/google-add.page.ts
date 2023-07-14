import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-add',
  templateUrl: './google-add.page.html',
  styleUrls: ['./google-add.page.scss'],
})
export class GoogleAddPage implements OnInit {
  inputValue: string="";
  showError: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // goToPass(){

  //   this.router.navigateByUrl('/google-pass');
  // }

  goToPass() {
    if (!this.inputValue || this.inputValue.trim() === '') {
      this.showError = true;
    } else {
      this.showError = false;
      this.router.navigateByUrl('/google-pass');
    }
  }
}
