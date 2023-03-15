import { Component, OnInit } from '@angular/core';
import { Model } from '../Dto/Model';
import { MakeService } from '../services/make.service';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  public modelTitle = "";
  public models: Model[] = [];
  constructor(private service:ModelService) { }

  ngOnInit(): void {
    this.service.getAll<Model>().subscribe(models => {
      this.models = models;
    })
  }

  addModel() {

  }

  deleteModel(id:number) {

  }


}
