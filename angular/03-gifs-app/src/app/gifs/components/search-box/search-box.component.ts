import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagImput!: ElementRef<HTMLInputElement>;

  constructor(
    private GifsService: GifsService
  ) { }

  searchTag(){
    const newTag= this.tagImput.nativeElement.value;
    this.GifsService.searchTag(newTag)
    this.tagImput.nativeElement.value='';
  }

  }

