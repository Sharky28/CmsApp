import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatSort,MatTableDataSource } from '@angular/material';

const elementData =[
  {
    orderDate:new Date(),
    orderNumber: 100,
    total:29.99,
    description:'2lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 101,
    total:39.99,
    description:'5lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 102,
    total:59.99,
    description:'1lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 100,
    total:29.99,
    description:'2lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 101,
    total:39.99,
    description:'5lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 102,
    total:59.99,
    description:'1lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 100,
    total:29.99,
    description:'2lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 101,
    total:39.99,
    description:'5lbs of tuna',
    isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber: 102,
    total:59.99,
    description:'1lbs of tuna',
    isChecked:false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements AfterViewInit {


displayedColumns:string[]= ['action','orderNumber','orderDate','description','total'] ;
dataSource = new MatTableDataSource(elementData); 

@ViewChild(MatSort,{static:false}) sort:MatSort;

  constructor() { }

  ngOnInit() {
  
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    console.log(this.sort);
  }

  selectAll(){
    for (var elm of elementData) {
      elm.isChecked= !elm.isChecked;
    }
  }

}
