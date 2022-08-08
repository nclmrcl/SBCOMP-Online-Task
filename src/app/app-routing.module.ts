import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGridComponent } from './newgrid/newgrid.component';

const routes: Routes = [{ path: '', component: NewGridComponent, data: { text: 'newGrid' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
