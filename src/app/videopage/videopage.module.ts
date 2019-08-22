import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';

import { IonicModule } from '@ionic/angular';

import { VideopagePage } from './videopage.page';

const routes: Routes = [
  {
    path: '',
    component: VideopagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [VideopagePage]
})
export class VideopagePageModule {}
