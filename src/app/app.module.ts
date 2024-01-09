import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgFor } from '@angular/common';

@NgModule({
    declarations: [
     
        // Outros componentes, diretivas, pipes, etc.
    ],
    imports: [
        BrowserModule,
        NgFor
        // AppComponent,
        // Outros módulos
    ],
    providers: [HttpClient],
    bootstrap: []
})
export class AppModule { }