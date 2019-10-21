import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario } from '../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', { static: true }) slides: IonSlides;


  loginUser = {
    email: 'danny_aguirre@hotmail.es',
    password: '123456'
  };

  registerUser: Usuario = {
    email: '999@9.com',
    password: '123456',
    nombre: 'test',
    avatar: 'av-1.png'
  };

  constructor(private usuarioService: UsuarioService, private navctrl: NavController, private uiService: UiServiceService) {

  }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {

    if (fLogin.invalid) { return; }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (valido) {
      //navegar al tabs
      this.navctrl.navigateRoot('main/tabs/tab1', { animated: true });
    } else {
      //mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctas...');
    }

    //console.log(fLogin.valid);
    //console.log(this.loginUser);

  }


  async registro(fRegistro: NgForm) {
    if (fRegistro.invalid) { return; }

    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      //navegar al tabs
      this.navctrl.navigateRoot('main/tabs/tab1', { animated: true });
    } else {
      //mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ese correo electronico ya existe...');
    }

    //console.log(fRegistro.valid);
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

}
