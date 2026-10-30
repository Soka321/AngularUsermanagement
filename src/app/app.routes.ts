import { Routes } from '@angular/router';
import { AddUser } from './add-user/add-user';


export const routes: Routes = [

    {
path: '',
component: HomeComponent

    },
{

    path: 'add-user',
    component: AddUser
}
];
