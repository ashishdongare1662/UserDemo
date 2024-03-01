import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import(`./pages/users.routes`).then((m) => m.USER_ROUTE)
    }
];
