import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
userid=""
todoid=""
title=""
status=""

readValue = () =>
{
  let data:any = {"userid":this.userid,"todoid":this.todoid,"title":this.title,"status":this.status}
  console.log(data)
}

}
