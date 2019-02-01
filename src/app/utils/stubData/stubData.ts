import { ItemData } from '../models/models';

export class StubData {

  static Data: ItemData[] = [
    {
      title: 'Unteraufgaben 1',
      data: [
        {
          id: 1,
          title: 'Unteraufgabe 1',
          comments: []
        },
        {
          id: 2,
          title: 'Unteraufgabe 2',
          comments: []
        },
        {
          id: 3,
          title: 'Unteraufgabe 3',
          comments: []
        }
      ]
    },
    {
      title: 'Unteraufgaben 2',
      data: [
        {
          id: 4,
          title: 'Unteraufgabe 1',
          comments: []
        },
        {
          id: 5,
          title: 'Unteraufgabe 2',
          comments: [
            'Making changes in your life is great and it is the way to grow and develop as people.'
          ]
        }
      ]
    }
  ];
}
