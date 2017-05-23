import { Component, OnInit  } from '@angular/core';
import {MdDialog} from '@angular/material';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { dataHandler } from '../../services/dataHandler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(private dataService: dataHandler, public dialog: MdDialog) {}


    data = [];
    question: any;
    answer: any;
    addData(){
     let tempdata = 
    [
         {
           "col": "placeholder",
           "title" : "Min familj",
           "desc" : "",
           "answer_desc": "http://sejs.se/imagetemp/familjbild.jpg"
         }
    ]
        this.dataService.postData(tempdata).subscribe((data) => data , (err) => console.log(err))
    }
    getAll(){
            return this.dataService.getData()
            .subscribe((resp) => {
                this.question = resp
                console.log(resp);
                
                this.dataService.getOne(resp._id)
                    .subscribe((data) => {
                    this.answer = data
                    console.log(this.answer[0].answer[0].answer_desc);
                })
            })
    }

    ngOnInit(){
        this.getAll();
    } 
  
}

