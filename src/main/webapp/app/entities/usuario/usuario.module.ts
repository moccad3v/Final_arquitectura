import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FleastoreSharedModule } from 'app/shared/shared.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioDetailComponent } from './usuario-detail.component';
import { UsuarioUpdateComponent } from './usuario-update.component';
import { UsuarioDeleteDialogComponent } from './usuario-delete-dialog.component';
import { usuarioRoute } from './usuario.route';

@NgModule({
  imports: [FleastoreSharedModule, RouterModule.forChild(usuarioRoute)],
  declarations: [UsuarioComponent, UsuarioDetailComponent, UsuarioUpdateComponent, UsuarioDeleteDialogComponent],
  entryComponents: [UsuarioDeleteDialogComponent]
})
export class FleastoreUsuarioModule {}