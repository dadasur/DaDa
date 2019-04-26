import { Component } from '@angular/core';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';

import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
 

  // Use dependency injection for FormBuilder
  constructor(private fb : FormBuilder,private router: Router)
  {
  
  }

  // Copy the data from html to our class characteristics
 
}  
