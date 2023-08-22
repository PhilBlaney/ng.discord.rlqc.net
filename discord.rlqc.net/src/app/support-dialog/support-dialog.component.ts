import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { RLQCService } from '../_services';
import { Support } from '../_models';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-support-dialog',
  templateUrl: './support-dialog.component.html',
  styleUrls: ['./support-dialog.component.scss']
})
export class SupportDialogComponent {
  public dataSupport: Support[] = [];
  constructor(private rlqcService: RLQCService, @Inject(MAT_DIALOG_DATA) public data: {name: string}) { }
  
  ngAfterViewInit(): void {
    this.getConversation();
  }
  getConversation(){
    this.dataSupport = [];
    this.rlqcService.getAll('support/convo/'+this.data).pipe(first()).subscribe(element =>{
      for(let e of element){
        let member : Support = {
          support_id : e.support_id,
          message_id: e.message_id,
          channel_id: e.channel_id,
          author_id: e.author_id,
          name: e.name,
          content: e.content,
          filename: e.filename,
          filetype: e.filetype,
          timestamp: e.timestamp
        }
        
        this.dataSupport.push(member);
        
      }
    })
  }
  getUrl(): string{
    return environment.URL;
  }
}
