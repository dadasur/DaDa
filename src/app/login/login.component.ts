import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  isSubmitted: boolean;
public batches=[];
  loading: boolean;



  nForm:FormGroup;
  
  post:any;
  
  description:String= '';
  
  name:string= '';









  constructor(private router: Router,private formBuilder: FormBuilder) {



    this.nForm = formBuilder.group(
      {
    'name' : [null,Validators.required],
    'description' : [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(20)])],
    'validate': ''  
      }
  )







   }
 // loginForm: FormGroup;
  ngOnInit() {
    //this.authService.getdetails().subscribe(data=>{console.log(data)});
  /*  this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
  });*/
  }
 /* get formControls()
   {
      return this.loginForm.controls;
    
  }*/
  /*login(){
    //console.log(this.loginForm.value);
    this.isSubmitted = true;

    this.router.navigateByUrl('/batches');

  }*/

  addPost(post)
  {
    //alert("hiiii");
    this.description = post.description;
    this.name = post.name;
    this.router.navigateByUrl('/leave');
  }

}
