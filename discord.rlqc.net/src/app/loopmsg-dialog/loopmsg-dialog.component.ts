import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { first } from 'rxjs/operators';
import { RLQCService } from '../_services';
import { loop_msg } from '../_models';
import  {NavbarService}  from 'src/services/navbar-service.service';
interface IData{
  loop: loop_msg
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
  private selectedGuild:string = "";
  constructor(private rlqcService: RLQCService, @Inject(MAT_DIALOG_DATA) public data: {loop: loop_msg}, private navbarService: NavbarService) 
  { 
    this.receivedData = data;
  }
  ngOnInit(){
    this.navbarService.events$.forEach(event => this.selectedGuild = event);
  }
  ngAfterViewInit(): void {
    if(this.receivedData){
      this.message = this.receivedData.content;
    }
  }
  
  onAddLoopMsg(){
    if(this.receivedData){
      this.receivedData.content = this.message;
    }
    else{
      this.receivedData = {msg_id:0,guild:0,content:this.message} as loop_msg
    }
    this.rlqcService.create("loop_msg",this.receivedData,this.navbarService.createHeader()).pipe(first()).subscribe((result) =>{
      console.log("Result of add");
      console.dir(result)
    });
  }
  onModifyLoopMsg(){
    this.receivedData.content = this.message;
    this.rlqcService.update("loop_msg",this.receivedData.msg_id,this.receivedData,this.navbarService.createHeader()).pipe(first()).subscribe((result) =>{
      console.log("Result of modify");
      console.dir(result)
    });
  }
  onDeleteLoopMsg(){
    this.rlqcService.delete("loop_msg",this.receivedData.msg_id, this.navbarService.createHeader(this.selectedGuild)).pipe(first()).subscribe((result) =>{
      console.log("Result of delete");
      console.dir(result)
    });
  }
}
