import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PagesService } from './pages.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  data: any;
  constructor(private userSerive: PagesService, private router: Router) {

    this.userSerive.getEmployees().subscribe((res: any) => {
      this.data = res;
    }, (err: any) => { });

  }


  onEdit(mail: any) {
    this.router.navigate([`/edit-user/${mail}`]);
  }


  onDelete(user: any) {
    this.userSerive.deleteEmployee(user).subscribe((res) => {
      alert(res.Message);
    });
  }
}
