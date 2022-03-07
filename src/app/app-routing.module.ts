import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
    {
        path: ':branch',
        component: AppComponent,
        children: [
            {
                path: ':extension',
                component: AppComponent,
                children: [
                    {
                        path: ':project',
                        component: AppComponent,
                        children: [
                            {
                                path: ':task',
                                component: AppComponent
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
