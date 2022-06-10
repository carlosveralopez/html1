import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-stats",
  templateUrl: "./card-stats.component.html",
})
export class CardStatsComponent implements OnInit {
  
  @Input()
  get statSubtitle(): string {
    return this._statSubtitle;
  }
  set statSubtitle(statSubtitle: string) {
   
    if(localStorage.getItem('rol')=='2'){
      this._statSubtitle="Panel de Administrador"
    }else{
      this._statSubtitle="Panel de Tareas"
    }
  }
  private _statSubtitle = "";

  @Input()
  
  get statTitle(): string {
    return this._statTitle;
  }
  set statTitle(statTitle: string) {
    
    if(localStorage.getItem('rol')=='2'){
      this._statTitle="Trabajadores";
    }else{
      this._statTitle="Tareas";
    }
    
  }
  
  
  private _statTitle= "";

  // The value must match one of up or down
  

  
  @Input()
  get statDescripiron(): string {
    return this._statDescripiron;
  }
  set statDescripiron(statDescripiron: string) {
    this._statDescripiron =
      statDescripiron === undefined ? "Since last month" : statDescripiron;
  }
  private _statDescripiron = "Since last month";

  @Input()
  get statIconName(): string {
    return this._statIconName;
  }
  set statIconName(statIconName: string) {
    this._statIconName =
      statIconName === undefined ? "far fa-chart-bar" : statIconName;
  }
  private _statIconName = "far fa-chart-bar";

  // can be any of the background color utilities
  // from tailwindcss
  @Input()
  get statIconColor(): string {
    return this._statIconColor;
  }
  set statIconColor(statIconColor: string) {
    this._statIconColor =
      statIconColor === undefined ? "bg-red-500" : statIconColor;
  }
  private _statIconColor = "bg-red-800";

  constructor() {}

  ngOnInit(): void {}
}
