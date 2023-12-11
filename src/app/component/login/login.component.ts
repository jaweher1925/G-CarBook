import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: { Firstname: string, Password: string } = { Firstname: '', Password: '' };
  constructor() { }

  ngOnInit(): void {
  }

 

}
