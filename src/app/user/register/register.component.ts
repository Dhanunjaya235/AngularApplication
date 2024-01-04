import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisteredUsersService } from 'src/app/registered-users.service';
import { RouteGuardService } from 'src/app/route-guard.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private service: RegisteredUsersService, private route: RouteGuardService) { }
  allusers: any = [];
  username:any;
  show = this.route.isLoggedIn();
  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.allusers = data;
    })
    this.registrationForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      userName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("^[0-9]*$")]]
    }, { validator: this.passwordMatchValidator });
  }
  onSubmit() {
    if(this.alreadyRegistereduser()){
      window.alert("Username already exists. Change the username to register");
      return;
    }
    if (this.registrationForm.valid) {
      this.service.storedata(this.registrationForm.value).subscribe(res => {
        window.alert("Registered Successfully");
      })
      this.registrationForm.reset();
    }
    else {
      window.alert("Enter the details correctly");
    }
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmpassword');
    if (password?.value !== confirmPassword?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  reset() {
    this.registrationForm.reset();
  }

  alreadyRegistereduser(): boolean {

    for (let user of this.allusers) {
      if (this.username == user.userName) {
        return true;
      }
    }
    return false;
  }
}
