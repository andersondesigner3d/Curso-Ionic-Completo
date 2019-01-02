import { ModalconteudoPage } from './../pages/modalconteudo/modalconteudo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActionsheetPage } from '../pages/actionsheet/actionsheet';
import { AlertPage } from '../pages/alert/alert';
import { BadgePage } from '../pages/badge/badge';
import { ButtonPage } from '../pages/button/button';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabPage } from '../pages/fab/fab';
import { GridPage } from '../pages/grid/grid';
import { IconPage } from '../pages/icon/icon';
import { InputPage } from '../pages/input/input';
import { TogglePage } from '../pages/toggle/toggle';
import { LoadingPage } from '../pages/loading/loading';
import { ToastPage } from '../pages/toast/toast';
import { ToobarPage } from '../pages/toobar/toobar';
import { SegmentPage } from '../pages/segment/segment';
import { TabsPage } from '../pages/tabs/tabs';
import { SelectPage } from '../pages/select/select';
import { Paginacao1Page } from '../pages/paginacao1/paginacao1';
import { Paginacao2Page } from '../pages/paginacao2/paginacao2';
import { Paginacao3Page } from '../pages/paginacao3/paginacao3';
import { ModalPage } from '../pages/modal/modal';
import { SlidesPage } from '../pages/slides/slides';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionsheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimePage,
    FabPage,
    GridPage,
    IconPage,
    InputPage,
    ListPage,
    TogglePage,
    LoadingPage,
    ToastPage,
    ToobarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    Paginacao1Page,
    Paginacao2Page,
    Paginacao3Page,
    ModalPage,
    ModalconteudoPage,
    SlidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionsheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimePage,
    FabPage,
    GridPage,
    IconPage,
    InputPage,
    ListPage,
    TogglePage,
    LoadingPage,
    ToastPage,
    ToobarPage,
    SegmentPage,
    TabsPage,
    SelectPage,
    Paginacao1Page,
    Paginacao2Page,
    Paginacao3Page,
    ModalPage,
    ModalconteudoPage,
    SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
