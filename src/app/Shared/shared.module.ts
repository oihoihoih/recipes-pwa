import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Components
import { InputComponent } from './Components/input/input.component';
import { PrimaryButtonComponent } from './Buttons/primary-button/primary-button.component';
import { CardComponent } from './Components/card/card.component';
import { MiniFabBtnComponent } from './Buttons/mini-fab-btn/mini-fab-btn.component';
import { ListComponent } from './Components/list/list.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { ChipComponent } from './Components/chip/chip.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { IconTextButtonComponent } from './Buttons/icon-text-button/icon-text-button.component';

// Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { ExpansionPanelComponent } from './Components/expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    PrimaryButtonComponent,
    MiniFabBtnComponent,
    ListComponent,
    SpinnerComponent,
    ChipComponent,
    HeaderComponent,
    FooterComponent,
    IconTextButtonComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    MatTreeModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
    ChipComponent,
    ExpansionPanelComponent,
    FooterComponent,
    HeaderComponent,
    IconTextButtonComponent,
    InputComponent,
    ListComponent,
    MiniFabBtnComponent,
    PrimaryButtonComponent,
    SpinnerComponent,
    MatChipsModule,
  ],
})
export class SharedModule {}
