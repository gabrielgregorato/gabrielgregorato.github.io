import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string; 
}

export const ROUTES: RouteInfo[] = [
    { path: '/staks',          title: 'STAKS',            icon:'nc-tile-56',    class: '' },
    { path: '/web',     title: 'WEB',         icon:'nc-button-play',       class: '' },
    { path: '/aplicativo',         title: 'APLICATIVO',          icon:'nc-check-2 ',    class: '' },
    { path: '/banco',          title: 'BANCO',           icon:'nc-box',  class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls:["style.css"]
})

export class SidebarComponent implements OnInit {
    public menuItems: any;
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
