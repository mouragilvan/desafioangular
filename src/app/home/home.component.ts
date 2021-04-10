import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   list = [];
   user : any;

  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.service.getRepositories('mouragilvan').subscribe(
      response => {
        this.list = response;
      },
      error => {
        console.log(error);
      }
    );
    this.service.getUser('mouragilvan').subscribe(
      response => {
        this.user = response;
      },
      error => {
        if(error.status != 404){
           console.log(error);
        }
      }
    );
  }

  pesquisar(event) {

    if (event.target.value.length > 3) {

      this.service.getUser(event.target.value).subscribe(
        response => {
          this.user = response;
        },
        error => {
          if(error.status != 404){
             console.log(error);
          }
        }
      );

      this.service.getRepositories(event.target.value).subscribe(
        response => {
          this.list = response;
        },
        error => {
          if(error.status != 404){
             console.log(error);
          }
        }
      )

    }

  }


}
