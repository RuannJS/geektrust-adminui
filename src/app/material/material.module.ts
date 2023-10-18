import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const MaterialModules = [
  MatPaginatorModule,
  MatTableModule,
  MatIconModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule,
];

@NgModule({
  exports: [MaterialModules],
  imports: [MaterialModules],
})
export class MaterialModule {}
