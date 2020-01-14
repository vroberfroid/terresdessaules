import {style} from '@angular/animations';

export let slideInLeft = [
  style( {transform: 'translate3d(-100%,0, 0)'}),
  style( {transform: 'translate3d(0,0,0)'}),
];

export const slideOutRight = [
  style({transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({transform: 'translate3d(100%, 0, 0)', opacity: 0, offset: 1}),
];

export const slideOutLeft = [
  style({transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({transform: 'translate3d(-150%, 0, 0)', opacity: 0, offset: 1}),
];

export const slideInRight = [
  style( {transform: 'translate3d(100%,0, 0)'}),
  style( {transform: 'translate3d(0,0,0)'}),
];
