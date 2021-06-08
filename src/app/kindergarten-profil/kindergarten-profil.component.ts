import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KindergartenProfilService } from '../kindergarten-profil.service';
import { Kindergartens } from '../kindergartens';



@Component({
  selector: 'app-kindergarten-profil',
  templateUrl: './kindergarten-profil.component.html',
  styleUrls: ['./kindergarten-profil.component.css']
})
export class KindergartenProfilComponent implements OnInit {

  public kindergartens: Kindergartens[];
  public deleteKindergarten :Kindergartens;
  public file:File;
  public kindergarten:Kindergartens;
  
  constructor(private  kindergartenPService: KindergartenProfilService) { 
   
  }

  
  ngOnInit(): void {

  }
 




  public changefile(e) {

    console.log(e);
    this.file = e.target.files[0];
    if (this.file) {
      const fileReader = new FileReader();
      const that = this as any;

      fileReader.onload = function () {
        that.post.imageUrl = fileReader.result;
        console.log(fileReader.result);

      }
      fileReader.readAsDataURL(this.file);

    }
  }

  

       
      }
    
  


