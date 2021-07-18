import { Component, OnInit } from '@angular/core';
import { crud } from '../model/crud';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  public store: any;
  constructor(private ab: CrudService) { }

  ngOnInit(): void {
    this.ab.getAllData().subscribe(a => {
      this.store = a.map(data => {
        return {
          id: data.payload.doc.id,
          ...data.payload.doc.data() as crud,
        }
      })
    })
  }

  deleteData(id: any){
    this.ab.removeDbData(id);
  }

}
