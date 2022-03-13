import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { StudentService } from './screens/dbhome/studentService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  stdobj: any;
}