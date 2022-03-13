import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StudentService } from './studentService';

@Component({
  selector: 'app-dbhome',
  templateUrl: './dbhome.page.html',
  styleUrls: ['./dbhome.page.scss'],
})
export class DbhomePage implements OnInit {
  stdobj: any;
  public appPages = [
    { title1: 'ประโยชน์ของการปลูกต้นไม้ฟอกอากาศ', icon: 'paper-plane' },
    { title2: 'สิ่งที่ส่งผลไม่ดีต่อร่างกาย',  icon: 'paper-plane' },
    { title3: 'ลักษณะของต้นไม้ฟอกอากาศ', icon: 'paper-plane' }
  ];
  public labels = [];
  constructor(private apiservice: StudentService, private alertCtrl: AlertController) { } ngOnInit() {
    this.apiservice.getDataList().subscribe((res) => {
      this.stdobj = res.map((t) => ({
        getid: t.payload.doc.id,
        gettreename: t.payload.doc.data()['treename'.toString()],
        getcomment: t.payload.doc.data()['comment'.toString()],
      }));
      console.log(this.stdobj);
    });
  }
  async presentPromptAdd() {
    const alert = this.alertCtrl.create({
      subHeader: 'Create',
      inputs: [
        {
          name: 'inputtreename',
          placeholder: 'กรอกชื่อต้นไม้'
        },
        {
          name: 'inputcomment',
          placeholder: 'กรอกคำแนะนำ'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Create',
          handler: data => {
            const tmpdata = {};
            tmpdata['treename'.toString()] = data.inputtreename;
            tmpdata['comment'.toString()] = data.inputcomment;
            this.apiservice.createStudent(tmpdata);
            console.log(tmpdata);
          }//handler
        }
      ]
    });
    (await alert).present();
  }
  async presentConfirmDEL(delid: any) {
    const alert = this.alertCtrl.create({
      subHeader: 'Delete', // Header
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            //console.log('Buy clicked');

            this.apiservice.deleteStudent(delid);
          }
        }
      ]
    });
    (await alert).present();
  }
  async changepage1(delid: any) {
    const alert = this.alertCtrl.create({
      subHeader: 'ประโยชน์ของการปลูกต้นไม้ฟอกอากาศ', // Header
      message: 'การปลูกต้นไม้ 1 ต้น ช่วยดูดซับคาร์บอนไดออกไซด์ได้ 9-15 กิโลกรัมต่อปี ดักฝุ่นและมลพิษทางอากาศได้ 1.4 กิโลกรัมต่อปี ช่วยฟอกอากาศ ลดการเกิดภูมิแพ้และหอบหืดได้ อีกทั้งยังช่วยทำให้สดชื่น ผ่อนคลาย ลดความเครียด รวมทั้งลดอุณหภูมิรอบบ้านได้ 2-4 องศาเซลเซียส เพราะช่วยให้ร่มเงาและป้องกันรังสี UV ได้เป็นอย่างดี',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    (await alert).present();
  }
  async changepage2(delid: any) {
    const alert = this.alertCtrl.create({
      subHeader: 'สิ่งที่ส่งผลไม่ดีต่อร่างกาย', // Header
      message: 'ฝุ่นละอองขนาดเล็กกว่า 2.5 ไมครอน หรือฝุ่น PM 2.5 สารระเหยจากเครื่องถ่ายเอกสารหรือเครื่องพิมพ์ ได้แก่ เบนซิน โทลูอีน และโอโซน  สารฟอร์มาลดีไฮด์ จากบ้านหรืออาคาร เช่น เฟอร์นิเจอร์ใหม่ ไม้อัด บอร์ด สี พลาสติก รวมถึงปูน  ก๊าซพิษต่าง ๆ เช่น คาร์บอนไดออกไซด์ คาร์บอนมอนนอกไซด์ ไนโตรเจนออกไซด์',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    (await alert).present();
  }
  async changepage3(delid: any) {
    const alert = this.alertCtrl.create({
      subHeader: 'ลักษณะของต้นไม้ฟอกอากาศ', // Header
      message: 'พืชตระกูลสนจะช่วยดักจับฝุ่นได้ เพราะโครงสร้างของใบมีความละเอียดซับซ้อน แต่หากเป็นไม้เลื้อยจะดักจับฝุ่นได้มากกว่าไม้อื่น เพราะมีพื้นผิวใบมากกว่าต้นไม้อื่น ด้วยลักษณะใบที่เรียวเล็ก ชื้น หยาบ มีขน หรือผิวใบที่เหนียวจะทำให้ฝุ่นเกาะติดใบได้ดี ส่วนลำต้น กิ่งก้านที่มีโครงสร้างพันกันอย่างสลับซับซ้อนมีส่วนช่วยดักจับฝุ่นได้',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    (await alert).present();
  }
}