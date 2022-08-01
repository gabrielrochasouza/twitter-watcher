import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TweetBoxComponent } from './components/tweet-box/tweet-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ModalProfileComponent } from './components/modal-profile/modal-profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MyTweetsCardsComponent } from './components/my-tweets-cards/my-tweets-cards.component';
import { SearchedTweetsCardsComponent } from './components/searched-tweets-cards/searched-tweets-cards.component';
import {reducer} from './store/app.state';
import { EffectsModule } from '@ngrx/effects'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetBoxComponent,
    TweetFormComponent,
    SearchFormComponent,
    ModalProfileComponent,
    MyTweetsCardsComponent,
    SearchedTweetsCardsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    StoreModule.forRoot({app: reducer}),
    HttpClientModule,
    // StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
