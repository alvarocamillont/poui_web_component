import { Customs } from '../custom.interface';
import { externalDashboardTile } from './dashtile.data';
import { podsButton } from './pods.data';
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
  {
    component: 'pods-button',
    src: podsButton,
  },
];
