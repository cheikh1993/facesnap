import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [

  ],
  imports: [
    HeaderComponent,
    CommonModule,
  ],
  exports:[HeaderComponent],
  providers:[
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class CoreModule { }
