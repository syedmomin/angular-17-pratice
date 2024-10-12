import { Routes } from '@angular/router';
import { DecoratorComponent } from './decorator/decorator.component';

export const routes: Routes = [
    {
        path: 'decorator/:routeText',
        component:DecoratorComponent
    }
];
