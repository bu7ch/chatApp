import {
  MatButtonModule,
  MatCheckboxModule,
  MatLineModule,
  MatExpansionModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatTooltipModule,
  MatTabsModule,
  MatSnackBarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatSnackBarModule, MatTabsModule, MatCheckboxModule, MatLineModule, MatExpansionModule, MatTabsModule, MatTabsModule, MatTooltipModule, MatTooltipModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatCardModule, MatInputModule, MatIconModule, MatDialogModule],
  exports: [MatButtonModule, MatSnackBarModule, MatTabsModule, MatCheckboxModule, MatLineModule, MatExpansionModule, MatTabsModule, MatTabsModule, MatTooltipModule, MatTooltipModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatCardModule, MatInputModule, MatIconModule, MatDialogModule]
})
export class MaterialdesignModule {}
