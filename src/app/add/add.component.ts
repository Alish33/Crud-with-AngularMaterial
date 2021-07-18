import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { updateLanguageServiceSourceFile } from 'typescript';
import { crud } from '../model/crud';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public docID: any;

  constructor(private ab: FormBuilder, private alish: CrudService, private Aroute: ActivatedRoute) { }

  public crudForm = this.ab.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required]],
    contact: ['', [Validators.required, Validators.pattern('98[0-9]{8}')]],
    DOB: ['', Validators.required],
    address: ['', [Validators.required, Validators.minLength(3)]]
  })

  ngOnInit(): void {
    this.Aroute.params.subscribe(z => {
      let id = z.id
      this.docID = z.id

      if (id != null) {
        this.alish.getOneData(id).subscribe(e => {
          let abcd: any = e.data();
          this.crudForm = this.ab.group({
            name: abcd['name'],
            email: abcd['email'],
            contact: abcd['contact'],
            DOB: abcd['DOB'].toDate(),
            address: abcd['address']
          })
        })
      }
    })
  }

  sendData(value: crud) {
    if (this.docID == null) {
      this.alish.dataTo(value);
    } else {
      this.alish.update(this.docID, value);
    }
  }
}

