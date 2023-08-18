import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { RLQCService } from '../_services';
import { LoopMsg } from '../_models';
interface IData{
  loop: LoopMsg
}

@Component({
  selector: 'app-loopmsg-dialog',
  templateUrl: './loopmsg-dialog.component.html',
  styleUrls: ['./loopmsg-dialog.component.scss']
})
export class LoopmsgDialogComponent {
  public message: string = "";
  //public receivedData: IData = {loop:{msg_id:0,content:"",guild:0}};
  public receivedData : any;
  constructor(private rlqcService: RLQCService, @Inject(MAT_DIALOG_DATA) public data: {loop: LoopMsg}) 
  { 
    this.receivedData = data;
  }
  ngAfterViewInit(): void {
    if(this.receivedData){
      this.message = this.receivedData.content;
    }
  }
  //content ne add/modify pas correctement. Delete fonctionne
  onAddLoopMsg(){
    if(this.receivedData){
      this.receivedData.content = this.message;
    }
    else{
      this.receivedData = {msg_id:0,guild:0,content:this.message} as LoopMsg
    }
    this.rlqcService.create("loop_msg",this.receivedData).pipe(first()).subscribe((result) =>{
      console.log("Result of add");
      console.dir(result)
    });
  }
  onModifyLoopMsg(){
    this.receivedData.content = this.message;
    this.rlqcService.update("loop_msg",this.receivedData.msg_id,this.receivedData).pipe(first()).subscribe((result) =>{
      console.log("Result of modify");
      console.dir(result)
    });
  }
  onDeleteLoopMsg(){
    this.rlqcService.delete("loop_msg",this.receivedData.msg_id).pipe(first()).subscribe((result) =>{
      console.log("Result of delete");
      console.dir(result)
    });
  }
}
