import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatInputModule, MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [MatCardModule, MatInputModule, MatButtonModule, MatIconModule],
})
export class CustomMaterialImportModule { }
