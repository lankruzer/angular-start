import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  public MS_IN_DAY: number = 86400000;
  public courseList: CourseListItem[] = [
    {
      id: 0,
      title: 'First course',
      creationDate: (Date.now() - this.MS_IN_DAY * 7).toString(),
      duration: 120,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: true
    },
    {
      id: 1,
      title: 'Second course',
      creationDate: (Date.now() - this.MS_IN_DAY).toString(),
      duration: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 2,
      title: 'Third course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 3,
      title: '4 course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 4,
      title: '5 course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 5,
      title: '6 course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 6,
      title: '7 course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 7,
      title: '8 course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 8,
      title: '9 course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 9,
      title: '10 course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    }
  ];

  constructor() {}

  getList() {
    console.log('call getList');
    return this.courseList;
  }

  getListItemById(id: Number) {
    console.log('call getListItemById id = ', id);
    const itemIndex = this.courseList.findIndex(item => item.id === id);
    return this.courseList[itemIndex];
  }

  createListItem(item: CourseListItem) {
    console.log('call createListItem');
    this.courseList.push(item);
  }

  editListItem(editItem: CourseListItem) {
    console.log('call editListItem');
    const itemIndex = this.courseList.findIndex(item => item.id === editItem.id);
    this.courseList[itemIndex] = { ...this.courseList[itemIndex], ...editItem };
  }

  deleteListItem(deleteItemId: Number) {
    console.log('call deleteListItem');
    const itemIndex = this.courseList.findIndex(item => item.id === deleteItemId);
    console.log('service courseList = ', this.courseList);
    this.courseList.splice(itemIndex, 1);
    return this.courseList;
  }
}
