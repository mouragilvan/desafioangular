import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';
import { counterReducer, reducer as UserReducer } from '../shared/ngrx/reducer';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { HttpClient } from '@angular/common/http';

/*

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
*/

describe('TESTE API', () => {
  //TO DO testes de chamada de api 
});

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HomeModule,
        HttpClientModule,
        StoreModule.forRoot({ load: counterReducer, user: UserReducer })
      ],
      declarations: [
        HomeComponent
      ],
    }).compileComponents();
  });

  it('Test Git user', (done) => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    const user = app.service.getUser('mouragilvan');
    user.subscribe(success => {     
      //Se colocar outro valor, vai estourar o erro
      expect(success?.name).toEqual('Gilvan Moura');
    })
    done();    
  });
});




