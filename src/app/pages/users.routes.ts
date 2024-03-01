import { Route } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const USER_ROUTE: Route[] =
    [

        {
            path: "",
            redirectTo: "main",
            pathMatch: "full",
        },
        {
            path: "",
            component: PagesComponent,
        },
        {
            path: "create-user",
            component: CreateUserComponent,
        },
        {
            path: "edit-user/:mailId",
            component: EditUserComponent,
        },
    ]