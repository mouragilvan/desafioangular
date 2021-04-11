import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from './modal.component';
import { Observable, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset, initial, LoadDataBegin } from '../shared/ngrx/actions';

class User {
  name = 'XIL'
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list = [];
  user: any;
  user$: Observable<any>;
  test$: Observable<any>;



  constructor(private service: HttpService,
    public dialog: MatDialog, private store: Store<{ user: any }>) {

    this.user$ = this.store.pipe(
      select('user')
    );

  }

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
        //Poderia fazer dentro da camada service tranquilamente
        this.store.dispatch(new LoadDataBegin(response));
      },
      error => {
        if (error.status != 404) {
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
          if (error.status != 404) {
            console.log(error);
          }
        }
      );

      this.service.getRepositories(event.target.value).subscribe(
        response => {
          this.list = response;
        },
        error => {
          if (error.status != 404) {
            console.log(error);
          }
        }
      )

    }

  }

  modal(item): void {
    console.log(item);
    const dialogRef = this.dialog.open(Modal, {
      width: '250px',
      data: item
    });

  }

}
