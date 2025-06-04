import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  // template: '<p>hello</p>',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

showFirstcomponet= false;
 
formModel: FormGroup;

// constructor(private fb: FormBuilder){
//     this.formModel= fb.group({
//       email: [null, [Validators.required, Validators.minLength(5), Validators.email]],
//       password: null
//     });
// }

   constructor(private fb: FormBuilder,
               private router: Router){
        this.formModel= fb.group({
          firstName: [null, [Validators.required]],
          lastName: [null, [Validators.required]],
          email: [null,[Validators.required,Validators.email]],
          phoneNo: null,
          gender: [null, [Validators.required]],
          password: [null, [Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
          confirmPassword: null,
          country: [null, [Validators.required]]
        })
   }


handleRegForm(){
  this.formModel.markAllAsTouched();
  if(this.formModel.invalid){
    alert("Invalid Registration");
    return;
  }
}



// handleFormSubmit(form:NgForm){
//   console.log(form);
// }

// handleFormSubmit(){
//    this.formModel.markAllAsTouched();
//    if(this.formModel.invalid){
//     alert("invalid");
//    }
//    console.log(this.formModel);
// }

  goToClick() {
    this.showFirstcomponet= true;
    this.router.navigate(['/first']);
  }

}
