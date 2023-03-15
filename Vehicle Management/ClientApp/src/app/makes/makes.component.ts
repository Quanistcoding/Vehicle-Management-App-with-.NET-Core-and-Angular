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
  public makeTitle = "";
  public makes:Make[] = [];

  constructor(private makeService:MakeService) { }

  ngOnInit(): void {
    this.makeService.getAll<Make>().subscribe(makes => {
      this.makes = makes;
    });
  }

  addMake() {
    if (!this.makeTitle) {
      return alert("Make Title is required!");
    }
    this.makeService.addOne<Make>({
      name:this.makeTitle
    }).subscribe(res => {
      this.makes.push(res as Make);
    });
  }
}
