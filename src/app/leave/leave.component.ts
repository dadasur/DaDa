import { Component, OnInit } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';


export interface PeriodicElement {
  name: string;
  Numberofpages: number;
  prise: number;
}

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  public UserName="";
  public UserNamee="";
  public UserNameee="";
 
  showone=true;
  showtwo=false;
   batches:string[] = new Array();
   j=0;
  
    employees = {
    accounting: []
};

   
  displayedColumns: string[] = ['firstName', 'lastName', 'age'];
  dataSource = this.employees.accounting;
  
  constructor() {
   }

  ngOnInit() {
  }
  chekk()
  {
    console.log("hiiiii");
    
    this.showone=false;
    this.showtwo=true;
  }
  chekkk()
  {
    var str=this.UserName.toString();
    console.log(str);
 
    var splitted = str.split(" " ,4); 
    var df=splitted[0]+splitted[1]+splitted[2]+splitted[3]+'-';

    this.UserName=df;

    var str=this.UserNamee.toString();  
    console.log(str);
  
    var splitted = str.split(" " ,4); 
    var df=splitted[0]+splitted[1]+splitted[2]+splitted[3]+'-';

    console.log(df);
   
    this.UserNamee=df;

    this.showone=true;
    this.showtwo=false;
   
  this.employees.accounting.push({ 
    "firstName" : this.UserName,
    "lastName"  : this.UserNamee,
    "age"       : this.UserNameee
  });

console.log(JSON.stringify(this.employees));
console.log(this.dataSource);
  }
       
}
           