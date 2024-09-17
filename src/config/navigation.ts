import { Navigation } from '@toolpad/core/AppProvider';

export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Products',
    },
    {
      segment: 'Chicken',
      title:'Chicken',
      icon: '🐔',
    },
    {
        segment: 'Eggs',
        title: 'Eggs',
        icon: '🥚',
    }, {
        segment: 'Beef',
        title: 'Beef',
        icon: '🥩'
    }, {
        segment: 'Mutton',
        title: 'Mutton',
        icon: '🐑',
    }, {
        kind: 'divider'
    }

  ];