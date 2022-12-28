import { Component, OnInit } from '@angular/core';
import { employee } from './employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  all_Employees: employee[] = [
    {
      employee_ID: 1,
      first_Name: 'Kevin',
      last_Name: 'Obrien',
      salary: 50000,
      DOB: new Date(1990, 10, 1),
      email: 'kevin.ob@gmail.com'
    },
    {
      employee_ID: 2,
      first_Name: 'Nevin',
      last_Name: 'Borden',
      salary: 50000,
      DOB: new Date(1995, 1, 1),
      email: 'Nevin.bornden@gmail.com'
    }
    ,{
    employee_ID: 3,
    first_Name: 'Naresh',
    last_Name: 'Sharma',
    salary: 150000,
    DOB: new Date(1985, 1, 12),
    email: 'Naresh@gmail.com'
  }
  ,{
  employee_ID: 4,
  first_Name: 'Bhavik',
  last_Name: 'Patel',
  salary: 25000,
  DOB: new Date(1990, 10, 10),
  email: 'Bhavik@gmail.com'
}
,{
employee_ID: 5,
first_Name: 'Neel',
last_Name: 'Dcosta',
salary: 50000,
DOB: new Date(1985, 12, 13),
email: 'Neel.d@gmail.com'
}
  ];
  
  toggleEmployeeId: number = 0;
  Employeelist: employee[] = [];
  updatedEmployee : employee = {
    employee_ID: 0,
    first_Name: '',
    last_Name: '',
    salary: 0,
    DOB: new Date(1990, 10, 1),
    email: ''
  }

  ngOnInit(): void {
    console.log("EmployeeComponent oninit called");
    this.loadEmployee();
    this.toggleEmployeeId = 0;
  }
  loadEmployee() {
    this.Employeelist = this.all_Employees;
  }
  editEmployee(selectedEmployee: employee) {
    this.toggleEmployeeId = selectedEmployee.employee_ID;
  }
  updateEmployee(selectedEmployee: employee) {
    this.toggleEmployeeId = 0;
    this.updatedEmployee = {
    employee_ID : selectedEmployee.employee_ID,
    first_Name: selectedEmployee.first_Name,
    last_Name:selectedEmployee.last_Name,
    salary:selectedEmployee.salary,
    DOB:selectedEmployee.DOB,
    email:selectedEmployee.email
    }
    this.all_Employees[this.all_Employees.indexOf(selectedEmployee)] = this.updatedEmployee;
  }
}
