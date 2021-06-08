import { Component, OnInit } from '@angular/core';
import { KindergartenProfilService } from '../kindergarten-profil.service';
import { Kindergartens } from '../kindergartens';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, NgForm ,Validators} from '@angular/forms';
import  {Router} from '@angular/router';
import {first} from "rxjs/operators";


@Component({
  selector: 'app-kindergarten-manager',
  templateUrl: './kindergarten-manager.component.html',
  styleUrls: ['./kindergarten-manager.component.css']
})
export class KindergartenManagerComponent implements OnInit {
 public kindergartens : Kindergartens[];
  public deleteKindergarten: Kindergartens;
  public editKindergarten: Kindergartens;
  public file:File;
  public postModal=false;
  firstName:string;
  public modalType:string;
  kindergartenss:any;
  public kindergarten: Kindergartens
   form:any;
   id:number;

   editForm: FormGroup;
  
 
  constructor(private formBuilder: FormBuilder,private  kindergartenPService: KindergartenProfilService,private router:Router) { 
   
   this.kindergarten={
    firstName: "",
    lastName: "",
    phone: null,
    image:"",
    employeNumber:null,
    imageurl:"",
    email: "",
    description: ""

  }
  }
  ngOnInit(): void {
    this.getKindergartens();
 
    }

    


    public getKindergartens(): void {
      this.kindergartenPService.getKindergarten().subscribe(
        (response: Kindergartens[]) => {
          this.kindergartens = response.reverse();
          console.log(this.kindergartens);
        },
        (error: HttpErrorResponse)=> {
          alert(error.message);
        }
      );
    }  
    
    public onUpdateKindergarten(kindergarten: Kindergartens): void {
      this.kindergartenPService.updateKindergarten(kindergarten,this.id).subscribe(
        (response: Kindergartens) => {
          console.log(response);
          this.getKindergartens();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    onSearch(){
      if(this.firstName!=null){
        this.kindergartenPService.getKindergartenByName(this.firstName)
      .subscribe(data=>{
        this.kindergartens=data;
      },err=>{
        console.log(err);
      });
    }
    

   
  }
    public onAddKindergarten(addForm: NgForm): void{
      const form = new FormData();
      form.append("firstName", addForm.value.firstName);
      form.append("lastName", addForm.value.lastName);
      form.append("email", addForm.value.email);
      form.append("phone", addForm.value.phone);
      form.append("employeNumber", addForm.value.employeNumber);
      form.append("description", addForm.value.description);
      if(this.file)
      form.append("image",this.file);
      this.kindergartenPService.addKindergarten(form).subscribe(
        (response: Kindergartens) =>{
          console.log(response);
          this.getKindergartens();
         addForm.reset();
         this.postModal=false;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
          );
          console.log(this.kindergarten);
        }
        
        
         
          
        

        public searchKindergarten(key:string): void {
          console.log(key);
          const results: Kindergartens[]= [];
          for(const kindergarten of this.kindergartens ){
            if(kindergarten.firstName.toLowerCase().indexOf(key.toLowerCase())!== -1
            ||kindergarten.lastName.toLowerCase().indexOf(key.toLowerCase())!== -1
            || kindergarten.email.toLowerCase().indexOf(key.toLowerCase())!== -1){
              results.push(kindergarten);
            }
          }
          this.kindergartens= results;
          if(results.length == 0 || !key) {
            this.getKindergartens();
          }
        }

        public onDeleteKindergarten(kindergartenId: number): void {
          this.kindergartenPService.deleteKindergarten(kindergartenId).subscribe(
            (response: void) => {
              console.log(response);
              this.getKindergartens();
            },
            (error: HttpErrorResponse) => {
              alert(error.message);
            }
          );
        }
        
        public changefile(e){
          console.log(e);
          this.file= e.target.files[0];
          if(this.file){
            const fileReader = new FileReader();
            const that =this as any;

            fileReader.onload=function(){
              that.kindergarten.imageurl= fileReader.result;
              console.log(fileReader.result);
            }
            fileReader.readAsDataURL(this.file);
          }
        }


        public showPostModal( kindergarten = null) {
          this.postModal = true;
          this.file=null;
          if(kindergarten){
              this.kindergarten.id=kindergarten.id;
              this.kindergarten.firstName=kindergarten.firstName;
              this.kindergarten.lastName=kindergarten.lastName;
              this.kindergarten.email=kindergarten.email;
              this.kindergarten.employeNumber=kindergarten.employeNumber;
              this.kindergarten.phone=kindergarten.phone;
              this.kindergarten.description = kindergarten.description;
              this.kindergarten.image = null ;
              this.kindergarten.imageurl= "data:image/png;base64," + kindergarten.image;
             
          }else{
            this.kindergarten={
             
              firstName: "",
              lastName: "",
              phone: null,
              email: "",
              image: "",
              description: "",
              employeNumber: null,
              imageurl: "",
            }
          }
        }
      public onOpenModal(kindergarten: Kindergartens,mode:string):void {
      const contrainer = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type='button';
      button.style.display='non';
      button.setAttribute('data-toggle','modal');
      if(mode === 'add'){
        button.setAttribute('data-target','#addKindergartenModal');
      }
      if(mode === 'edit'){
        this.editKindergarten =kindergarten;
        button.setAttribute('data-target','#updateKindergartenModal');
      }
      if(mode === 'delete'){
        this.deleteKindergarten= kindergarten;
        button.setAttribute('data-target','#deleteKindergartenModal');
      }
      contrainer.appendChild(button);
      button.click();
    }

    OnToProfil(pageName:string):void{
      this.router.navigate([`${pageName}`]);
    }

  
 
    
    public closeModal() {
      this.postModal = false;
    }
  
  
    public preventCloseModal(e) {
      e.stopPropagation();
    }

 
 
  
  getKindergarten(id): void {
    this.kindergartenPService.getKindergartenbyId(id)
    .subscribe(
      data => {
        this.kindergarten = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


}
