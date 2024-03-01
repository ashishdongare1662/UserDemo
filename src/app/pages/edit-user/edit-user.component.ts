import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PagesService } from '../pages.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  public userForm: FormGroup;
 id:any;

  constructor(private fb: FormBuilder, private pageSevice: PagesService,   private router: Router,private _route:ActivatedRoute) {

    this._route.params.subscribe((a)=>{
      this.id =a['mailId']
    })

    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5)],],
      phoneNo: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]],
    })


    this.pageSevice.getEmployee(this.id).subscribe((res: any) => {
     this.userForm.patchValue({
      firstName: res.FirstName,
      lastName: res.LastName,
      address: res.Address,
      email: res.Email,     
      phoneNo: res.PhoneNo
    });
    }, (err: any) => { });

  }

  onUpdate() {
    if (this.userForm.valid) {
      var user: any = {};
      user.FirstName = this.userForm.controls['firstName'].value;
      user.LastName = this.userForm.controls['lastName'].value;
      user.Address = this.userForm.controls['address'].value;
      user.Email = this.userForm.controls['email'].value;
      user.PhoneNo = this.userForm.controls['phoneNo'].value;
      this.pageSevice.updateUser(user).subscribe((res: any) => {
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

}
