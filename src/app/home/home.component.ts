import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public list = [];

  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.service.getRepositories('mouragilvan').subscribe(
      response=>{
          this.list = response;
      },
      error=>{
        console.log(error);
      }
    );
  }

  pesquisar(event){
    console.log(event.target.value);
  }

}
