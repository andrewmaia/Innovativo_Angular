import { Component, OnInit , AfterViewInit} from '@angular/core';
declare function init():any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    init();
  }
  obterNomePagina(){
    return "Dashboard";
  }

  obterCaminho(){
    return ['Home','Dashboard'];
  }
}

