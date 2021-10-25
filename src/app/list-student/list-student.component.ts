import { Component, OnInit } from '@angular/core';

export interface LStudent {
  id: string;
  name: string;
  mark: number;
  img: string;
}
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student: LStudent = {
    id: '1',
    name: 'Ng Van A',
    mark: 0,
    img: 'https://i2.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1'
  };


  getMark(value: any) {
    this.student.mark = value;
  };

  constructor() { };

  ngOnInit(): void {
  };

  

}
