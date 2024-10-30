import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardsComponent } from './components/user-cards/user-cards.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { SearchComponent } from './components/search/search.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    UserCardsComponent,
    UserDetailsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    MatCardContent,
    MatCard,
    MatCardActions,
    MatIcon,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginator,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
