import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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
import { ModalPage } from '../pages/modal/modal';
import { SlidesPage } from '../pages/slides/slides';
import { TipografiaPage } from '../pages/tipografia/tipografia';
import { ChipPage } from '../pages/chip/chip';
import { PopoverPage } from '../pages/popover/popover';
import { SearchbarPage } from '../pages/searchbar/searchbar';
import { CameraPage } from '../pages/camera/camera';
import { BarcodePage } from '../pages/barcode/barcode';
import { GeolocationPage } from '../pages/geolocation/geolocation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GeolocationPage;//HomePage

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Principal', component: HomePage },
      { title: 'ActionSheet', component: ActionsheetPage },
      { title: 'Alerts', component: AlertPage },
      { title: 'Badges', component: BadgePage },
      { title: 'Buttons', component: ButtonPage },
      { title: 'Cards', component: CardPage },
      { title: 'Checkbox', component: CheckboxPage },
      { title: 'Radio', component: RadioPage },
      { title: 'Range', component: RangePage },
      { title: 'DateTime', component: DatetimePage },
      { title: 'Fab', component: FabPage },
      { title: 'Grid', component: GridPage },
      { title: 'Icon', component: IconPage },
      { title: 'Input', component: InputPage },
      { title: 'List', component: ListPage },
      { title: 'Toggle', component: TogglePage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Toast', component: ToastPage },
      { title: 'Toolbar', component: ToobarPage },
      { title: 'Segment', component: SegmentPage },
      { title: 'Tabs', component: TabsPage },
      { title: 'Select', component: SelectPage },
      { title: 'Paginação', component: Paginacao1Page },
      { title: 'Modal', component: ModalPage },
      { title: 'Slides', component: SlidesPage },
      { title: 'Tipografia', component: TipografiaPage },
      { title: 'Chip', component: ChipPage },
      { title: 'Popover', component: PopoverPage },
      { title: 'Searchbar', component: SearchbarPage },
      { title: 'Camera', component: CameraPage },
      { title: 'Barcode', component: BarcodePage },
      { title: 'Geolocalização', component: GeolocationPage }       
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component); //não faz rota
    //this.nav.pushpage.component(); //faz rota com push
  }
}
