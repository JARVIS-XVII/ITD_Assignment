import { Component } from '@angular/core';
import { EmployeeComponent } from "../../components/employee/employee.component";
import { AdminComponent } from "../../components/admin/admin.component";
import { UserComponent } from "../../components/user/user.component";

@Component({
  selector: 'app-home',
  imports: [EmployeeComponent, AdminComponent, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}