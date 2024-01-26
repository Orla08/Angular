import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';




@Injectable({providedIn: 'root'})
export class GifsService {

    private _tagsHistory: string[] = [];
    public gifList : Gif[] = [];

    serviceUrl : string = 'https://api.giphy.com/v1/gifs';
    private apiKey : string ='SOgTOMiRdtMxsBIxD5LXV9oXmTkYdaaK';
    
    constructor( private http: HttpClient) { }

    get tagsHistory(){
        return [...this._tagsHistory];
    }
    
    private organizeHistory(tag:string){
        tag = tag.toLocaleLowerCase();
        
        if(this._tagsHistory.includes(tag)){
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0,10);
    }
 
    searchTag(tag:string):void{
        if(tag.length === 0) return;
        this.organizeHistory(tag);

        const params = new HttpParams() //Aqui instancio la clase HttpParamas
            .set('api_key', this.apiKey) //Aqui les seteo los parametros que quiero que lleve la Url
            .set('q', tag)
            .set('limit', 10)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params:params})
            .subscribe(resp=>{
                this.gifList = resp.data;
            console.log(this.gifList);
        })

    }


}