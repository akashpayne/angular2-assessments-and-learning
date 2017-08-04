import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { LifecycleComponent } from "./lifecycle.component";


@NgModule({
    declarations: [AppComponent, LifecycleComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}