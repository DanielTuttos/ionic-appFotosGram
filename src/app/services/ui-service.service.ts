import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertCtrl: AlertController, private toastCrtl: ToastController) { }

  async alertaInformativa(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Informacion',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCrtl.create({
      message,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

}
