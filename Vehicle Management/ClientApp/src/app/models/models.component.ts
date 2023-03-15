import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Make } from '../Dto/Make';
import { Model } from '../Dto/Model';
import { MakeService } from '../services/make.service';
import { ModelService } from '../services/model.service';
import { forkJoin, take, switchMap } from "rxjs";
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  public modelTitle = "";
  public models: Model[] = [];
  public makes: Make[] = [];

  constructor(private modelService: ModelService, private makeService:MakeService) { }

  ngOnInit(): void {

    forkJoin({
      models: this.modelService.getAll<Model>(),
      makes: this.makeService.getAll<Make>()
    }).pipe(take(1)).subscribe(value => {
      this.models = value.models;
      this.makes = value.makes;
    })

  }

  addModel(form:NgForm) {
    this.modelService.addOne<Model>(form.value).pipe(switchMap(res => {
      return this.modelService.getAll<Model>();
    })).subscribe(models => {
      this.models = models;
    });
  }

  deleteModel(id:number) {
    this.modelService.deleteOne(id).subscribe(res => {
      this.models = this.models.filter(model => model.id !== id);
    })
  }


}
