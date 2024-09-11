import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  informes() {
    this.navCtrl.navigateForward(['/informe-d'])
  }

  generar() {
    this.navCtrl.navigateForward(['/qr-d'])
  }

  curso() {
    this.navCtrl.navigateForward(['/cursos-d'])
  }

}
