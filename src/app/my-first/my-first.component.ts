import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-first',
  standalone: false,
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.css'
})
export class MyFirstComponent {

// ------- Reactive form start-------

  formModel: FormGroup; //reactive form --- formBuilder, formGroup
  gender: string = '';
  isdisabled: boolean = true;
  showModal = false;
  colorname: string = 'red';
  blueClass = 'blue-text';
  submittedData: any ={firstName: '',
                      lastName: '',
                      password: '',
                      phone: '',
                      email: '',
                      gender: '',
                      skills: '',
                      department: '',
  };

  constructor(private fb: FormBuilder){ 

          this.formModel = fb.group({ 
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
            phone: null,
            email: [null, [Validators.required, Validators.email]],
            gender: [null, [Validators.required]],
            skills: [null, [Validators.required]],
            department: [null, [Validators.required]]


          })

  }

  handleRegForm(){
    this.formModel.markAllAsTouched();
    if(this.formModel.invalid){
        alert("Registration invalid!");
        this.isdisabled=true;
        return;
    }
    else{
      alert("Successfully Registered!");
      this.isdisabled=false;
      return;
    }
  }

   openPopup() {
    debugger;
    this.showModal = true;
    this.submittedData = this.formModel.value;
  }

   closePopup() {
    this.showModal = false;
  }



}
