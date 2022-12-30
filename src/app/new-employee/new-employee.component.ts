import { Component, OnInit } from '@angular/core';
import { newEmployee } from './newEmployee';
import { EmpServiceService } from './../services/emp-service.service'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  all_Employees: newEmployee[] = [];
  status: string = "Loading....";
  constructor(private employeeService: EmpServiceService) {
  }

  loadEmployees() {
    this.employeeService.fetchAllEmployees().subscribe((response) => {
      //this.Employeelist = response;
      const respone1 = JSON.stringify(response);
      const response2 = JSON.parse(respone1);

      console.log("Response is" + JSON.parse(JSON.stringify(response2['message'])));
      this.Employeelist = JSON.parse(JSON.stringify(response2['data']));
      this.status = JSON.parse(JSON.stringify(response2['message']));
    });
  }

  toggleEmployeeId: number = 0;
  Employeelist: newEmployee[] = [];
  ngOnInit(): void {
    this.loadEmployees();
  }
}
