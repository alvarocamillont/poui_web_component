import { Customs } from '../custom.interface';
import { externalDashboardTile } from './dashtile.data';
import { xcomp } from './xcomp.data';

export const customs: Customs = [
  {
    component: 'external-dashboard-tile',
    src: externalDashboardTile,
  },
  {
    component: 'x-dropdown',
    src: xcomp,
  },
];
