import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  creatFormGroup(){
    return new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(5)]),
    apaterno : new FormControl('',[Validators.required, Validators.minLength(5)]),
    amaterno : new FormControl('',[Validators.required, Validators.minLength(5)]),
    direccion : new FormControl('',[Validators.required, Validators.minLength(5)]),
    telefono : new FormControl('',[Validators.required, Validators.minLength(5)]),
    celular : new FormControl('',[Validators.required, Validators.minLength(5)]),
    email : new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern(this.emailPattern)]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    conpassword : new FormControl('',[Validators.required, Validators.minLength(5)])
    });
  }

  contactForm: FormGroup;
  constructor(private dbData: DataDbService) { 
    this.contactForm = this.creatFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    if(this.contactForm.valid){
      console.log('Saved', this.contactForm.value);
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm();
    }else{
      console.log('No es valido')
    }
    
  }

  get name(){return this.contactForm.get('name');}
    get apaterno(){return this.contactForm.get('apaterno');}
    get amaterno(){return this.contactForm.get('amaterno');}
    get direccion(){return this.contactForm.get('direccion');}
    get telefono(){return this.contactForm.get('telefono');}
    get celular(){return this.contactForm.get('celular');}
    get email(){return this.contactForm.get('email');}
    get password(){return this.contactForm.get('password');}
    get conpassword(){return this.contactForm.get('conpassword');}

}
