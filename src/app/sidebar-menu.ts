import { title } from "node:process";
import { SidebarMenuItems } from "./@theme/model/sidebar-menu-items";

export const SIDEBAR_MENU_ITEM: SidebarMenuItems[] = [
    {
        title: 'Dashboard',
        translate: 'dashboard',
        icon: 'fa fa-tachometer',
        link: '/'
    },
    {
      title: 'Admins',
      id: 'admins',
      translate: 'admins',
      icon: 'fa fa-users',
      children: [
        {
          translate: 'all-admins',
          link: '/admins'
        },
        {
          translate: 'new-admin',
          link: '/admins/add'
        }
      ]
    },
    {
        title: 'Regions',
        id: 'regions',
        translate: 'regions',
        icon: 'fa fa-institution',
        children: [
            {
                translate: 'all-regions',
                link: '/regions'
            },
            {
                translate: 'new-region',
                link: '/regions/add'
            }
        ]
    },
    {
        title: 'Events',
        id: 'events',
        translate: 'events',
        icon: 'fa fa-calendar-check-o',
        children: [
            {
                translate: 'all-events',
                link: '/events'
            },
            {
                translate: 'new-event',
                link: '/events/add'
            }
        ]
    },
    {
      title: 'Orders',
      id: 'orders',
      translate: 'orders',
      icon: 'fa fa-tags',
      children: [
        {
          translate: 'accept-orders',
          link: '/orders/accepted'
        },
        {
          translate: 'unaccept-orders',
          link: '/orders/unaccepted'
        }
      ]
    },
    {
      title: 'Guides',
      translate: 'guides',
      icon: 'fa fa-user-circle',
      link: '/guides',
    }
];
