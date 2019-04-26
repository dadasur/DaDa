import { Component, OnInit } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';


export interface PeriodicElement {
  name: string;
  Numberofpages: number;
  prise: number;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'c', Numberofpages: 10079, prise: 500}
 
];

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

  displayedColumns: string[] = ['name', 'Numberofpages', 'prise'];
  dataSource = ELEMENT_DATA;
  constructor() { }

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
  //  var str = "Apples are round, and apples are juicy."; 
    var splitted = str.split(" " ,4); 
    var df=splitted[0]+splitted[1]+splitted[2]+splitted[3]+"to";
//+splitted[1]+splitted[2];
    console.log(df);
    console.log(this.UserName);
    this.UserName=df;


    var str=this.UserNamee.toString();
    console.log(str);
  //  var str = "Apples are round, and apples are juicy."; 
    var splitted = str.split(" " ,4); 
    var df=splitted[0]+splitted[1]+splitted[2]+splitted[3]+"-";
//+splitted[1]+splitted[2];
    console.log(df);
    console.log(this.UserName);
    this.UserNamee=df;

    this.showone=true;
    this.showtwo=false;
  }
}
           