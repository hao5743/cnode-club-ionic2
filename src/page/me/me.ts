import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UserInterface } from '../../interface/index';
import { DataApi, Tip } from '../../provider/index';
import { TopicPage, LoginPage, SettingPage, AboutPage } from '../index';
interface User {
    fetching: boolean,
        data: UserInterface
}
@Component({
    selector: 'page-topic',
    providers: [],
    templateUrl: 'me.html'
})
export class MePage {
    public user: User;
    public collects: any = [];
    public state: string = "recent";
    public islogin = false;
    constructor(private dataApi: DataApi,
        private nav: NavController,
        private modalCtrl: ModalController,
        private tip: Tip,
        private navParams: NavParams) {
        this.user = {
            fetching: false,
            data: {} as UserInterface
        };
    }
    ngOnInit() {}
    ionViewWillEnter() {
        this.getUser();
    }
    openLogin() {
        let modal = this.modalCtrl.create(LoginPage);
        modal.onDidDismiss(data => {
            this.getUser();
        });
        modal.present();
    }

    getUser() {
        let data = this.dataApi.getLoginUser();
        this.user.data = {} as UserInterface;
        if (data) {
            this.user.data = data;
            this.islogin = true;
            //更新缓存的个人信息
            this.dataApi.getUser(this.user.data.loginname).then((res) => {
                if (res && res.data) {
                    this.user.data = res.data;
                    console.log('loginuser已更新');
                    this.dataApi.setLoginUser(res.data);
                }
            }).catch(this.handleError);
            this.getUserCollects();
        } else {
            this.islogin = false;
        }
    }
    goAbout() {
        console.log('openlogin');
        let modal = this.modalCtrl.create(AboutPage);
        modal.onDidDismiss(data => {});
        modal.present();
    }
    getUserCollects() {
        return this.dataApi.getUserCollects(this.user.data.loginname).then((res) => {
            if (res && res.data) {
                this.collects = res.data;
            }
        }).catch((error)=>{
            this.collects=[];
            this.handleError(error,'获取收藏错误或收藏api不存在');
        });
    }
    goBack() {
        this.nav.pop();
    }
    goTopic(p ? ) {
        this.nav.push(TopicPage, {
            id: p.id,
            data: p
        });
    }
    goSetting() {
        this.nav.push(SettingPage);
    }
    logout() {
        this.tip.presentConfirm('确认退出？').then((res) => {
            if (res) {
                this.dataApi.logout();
                this.tip.presentToast('已经退出');
                this.getUser();
            }
        })
    }
    handleError(error:any, message?:string) {
        console.error(error);
        if(message){
            console.error(message);
        }
    }
}
