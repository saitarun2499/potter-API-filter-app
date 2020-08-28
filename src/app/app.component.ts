import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts;
  house = 'Slytherin'
  displayedColumns: string[] = ['name', 'role', 'house', 'school' , 'bloodStatus' , 'species'];
  title = 'harry';
  constructor(private http1:DataService){}
  ngOnInit(){
    this.http1.Harry().subscribe(
      (data) => {
        console.log(data),
        this.posts = data
      });
      this.http1.Harry().subscribe(
        (data)=>{
          console.log(data),
          this.posts = data
        }
      )
  }
  dataSource = new MatTableDataSource(this.posts);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
