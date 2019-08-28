import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Apollo, ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';

import { ItemService } from './services/item.service';
import { ShoppingService } from './services/shopping.service';
import { StoreService } from './services/store.service';

import { ItemModule } from './item/item.module';
import { ShoppingModule } from './shopping/shopping.module';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ShoppingModule,
    ItemModule,
    StoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'itemService', useClass: ItemService },
    { provide: 'shoppingService', useClass: ShoppingService },
    { provide: 'storeService', useClass: StoreService },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://localhost:5001/api/graphql'
          })
        };
      },
      deps: [HttpLink]
    }
  // { provide: 'itemURL', useValue: 'http://localhost:5000/api/item' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(
  //   apollo: Apollo,
  //   httpLink: HttpLink,
  // ) {
  //   apollo.create({
  //     link: httpLink.create({ uri: 'https://localhost:5001/api/graphql' }),
  //     cache: new InMemoryCache(),
  //   });
  // }
}
