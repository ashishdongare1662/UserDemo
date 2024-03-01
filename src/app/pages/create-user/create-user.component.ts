import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  public userForm: FormGroup;

  constructor(private fb: FormBuilder, private pageSevice: PagesService,   private router: Router) {

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)],],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]],
    })
  }

  onSubmit() {
    if (this.userForm.valid) {

      var user: any = {};
      user.FirstName = this.userForm.controls['firstName'].value;
      user.LastName = this.userForm.controls['lastName'].value;
      user.Address = this.userForm.controls['address'].value;
      user.Email = this.userForm.controls['email'].value;
      user.PhoneNo = this.userForm.controls['phoneNo'].value;
      this.pageSevice.addEmployee(user).subscribe((res: any) => {
        if(res.Status == 2)
        {
          alert(res.Message);
        }
        else
        {
          alert(res.Message);
          this.router.navigate([``]);
        }
      }, (err: any) => { });
    }
    else {

    }

  }

  onReset() {
    this.userForm.reset();
  }
}
