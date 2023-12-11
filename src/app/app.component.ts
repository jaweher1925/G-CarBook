import { Component } from '@angular/core';
import { LoginComponent } from './component/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'G-CarBook';


   regiterObj :any= { 
    "userId":0,
    "FirstName":"",
    "LastName":"",
    "age":"",
    "Numtel":"",
    "Numcin":"" 
  };

  loginObj : any={
    
  }

   openRegister(){
    const model = document.getElementById('registerModel');
    if(model != null){
      model.style.display = 'block'
    }
  }

 closeRegister(){
    const model = document.getElementById('registerModel');
    if(model != null){
      model.style.display = 'none'
    }
  }
}
