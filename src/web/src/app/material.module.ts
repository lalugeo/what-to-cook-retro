import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
  ]
})
export class MaterialModule { }