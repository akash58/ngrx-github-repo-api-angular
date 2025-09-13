import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { githubReducer } from './store/github.reducer';
import { CommonModule } from '@angular/common';
import { GithubEffects } from './store/github.effects';
import { ExploreComponent } from './component/explore-component/explore-component';
import { ShortNumberPipe } from './pipe/short-number.pipe';
import { BookmarksComponent } from './component/bookmarks-component/bookmarks-component';
import { SettingsComponent } from './component/settings-component/settings-component';

@NgModule({
  declarations: [
    App,
    ExploreComponent,
    ShortNumberPipe,
    BookmarksComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ github: githubReducer }),
    EffectsModule.forRoot([GithubEffects])
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
