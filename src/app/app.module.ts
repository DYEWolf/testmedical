import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SethealthModule } from "@sethealth/angular";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SethealthModule.forRoot({
      publicKey:
        "pub_sethealth-testing_IdjziK+M3D8mRTX5nzJNN2RhDFPBBbB5u6SxBSbuHJE="
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
