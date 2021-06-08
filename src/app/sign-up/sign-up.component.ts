import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
import {KindergartenProfilService} from '../kindergarten-profil.service';
import { Kindergartens } from '../kindergartens';
import { NgForm } from '@angular/forms';
import { Kindergarten } from '../shared/kindergarten.model';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  

  constructor(private router:Router, private service:KindergartenProfilService) { }



  ngOnInit(): void {
  
    }
    SAdmin(pageName:string):void{
      this.router.navigate([`${pageName}`]);
    }

  }

