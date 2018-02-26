import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [{path: 'onChat', component: ChatComponent}];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);