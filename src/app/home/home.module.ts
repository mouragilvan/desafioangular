import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule  } from '@angular/material/input';
import { HomeComponent } from './home.component';
@NgModule({
    imports: [
      CommonModule,
      MatListModule,
      MatCardModule,
      MatFormFieldModule, 
      MatInputModule,
      FlexLayoutModule   
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {
}