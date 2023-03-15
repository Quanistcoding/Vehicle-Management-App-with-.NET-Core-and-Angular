import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Make } from '../Dto/Make';
import { MakeService } from '../services/make.service';



@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.css']
})
export class MakesComponent implements OnInit {
  public makes$?: Observable<Make[]>;

  constructor(private makeService:MakeService) { }

  ngOnInit(): void {
    this.makes$ = this.makeService.getAll<Make>();
  }

}
