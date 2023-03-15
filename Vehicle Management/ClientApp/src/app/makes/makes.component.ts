import { Component, OnInit } from '@angular/core';
import { MakeService } from '../services/make.service';

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.css']
})
export class MakesComponent implements OnInit {

  constructor(private makeService:MakeService) { }

  ngOnInit(): void {
    this.makeService.getAll().subscribe(makes => {
      console.log(makes);
    });
  }

}
