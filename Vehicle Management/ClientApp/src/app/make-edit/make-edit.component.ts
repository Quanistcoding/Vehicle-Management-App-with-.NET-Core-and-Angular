import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Make } from '../Dto/Make';
import { MakeService } from '../services/make.service';

@Component({
  selector: 'app-make-edit',
  templateUrl: './make-edit.component.html',
  styleUrls: ['./make-edit.component.css']
})
export class MakeEditComponent implements OnInit {

  public make: Make = {
    id: 0,
    name:""
  }
;

  constructor(private route: ActivatedRoute,private sercice:MakeService,private router:Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.sercice.getOne<Make>(Number(id)).subscribe(make => {
      this.make = make;
    })
  }


  editMake(form: any) {
    console.log(form)
    this.sercice.updateOne(this.make.id!, form.value).subscribe(res => {
      this.router.navigate(['/makes']);
    });
  }
}
