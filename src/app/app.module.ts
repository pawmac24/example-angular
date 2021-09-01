import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings.component';
import { HelloWorldNgIfComponent } from './hello-world-ngif.component';
import { HelloWorldDependencyInjectionComponent } from './hello-world-di.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    HelloWorldBindingsComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
