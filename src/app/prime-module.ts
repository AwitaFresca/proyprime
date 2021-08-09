import {NgModule} from '@angular/core';

import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {TimelineModule} from 'primeng/timeline';

import {OrderListModule} from 'primeng/orderlist';

import {DataViewModule} from 'primeng/dataview';
import {CarouselModule} from 'primeng/carousel';
import {DividerModule} from 'primeng/divider';


@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    SidebarModule,
    TimelineModule,
    OrderListModule,
    DataViewModule,
    CarouselModule,
    DividerModule,

  ]
})
export class PrimeModule {}
