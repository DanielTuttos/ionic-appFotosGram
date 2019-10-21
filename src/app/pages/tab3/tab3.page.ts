import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  constructor(private usuarioServices: UsuarioService, private uiService: UiServiceService, private postService: PostsService) { }

  ngOnInit() {
    this.usuario = this.usuarioServices.getUsuario();
    console.log(this.usuario);
  }

  async actualizar(fActualizar: NgForm) {

    if (fActualizar.invalid) { return; }

    const actualizado = await this.usuarioServices.actualizarUsuario(this.usuario);

    console.log(actualizado);

    if (actualizado) {
      //toastcon el mensaje de actualizado
      this.uiService.presentToast('Registro Actualizado.');
    } else {
      //toast con el error
      this.uiService.presentToast('No se pudo actualizar.');
    }

  }

  logout() {
    this.postService.paginaPosts = 0;
    this.usuarioServices.logout();
  }

}
