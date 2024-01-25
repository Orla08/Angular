import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private GifsService: GifsService
  ) { }

  ngOnInit(): void {
  }

  

  get listTags(){
    return this.GifsService.tagsHistory;
  }

  

}
