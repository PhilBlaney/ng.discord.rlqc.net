import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { first } from 'rxjs/operators';
import { LoopMsg } from '../_models';
import { RLQCService } from '../_services';
import { MatDialog } from '@angular/material/dialog';
import { LoopmsgDialogComponent } from '../loopmsg-dialog/loopmsg-dialog.component';


const ELEMENT_DATA: LoopMsg[] = [
];


@Component({
  selector: 'app-message-rotation',
  templateUrl: './message-rotation.component.html',
  styleUrls: ['./message-rotation.component.scss']
})
export class MessageRotationComponent implements AfterViewInit{
  
  public dataLoopMsg: LoopMsg[] = [];
  displayedColumns: string[] = ['msg_id', 'content', ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private rlqcService: RLQCService, public dialog:MatDialog){

  }
  openDialogAdd(){
    this.dialog.open(LoopmsgDialogComponent,{
      width:'250px'
    })
  }
  openDialogModif(value:string){
    this.dialog.open(LoopmsgDialogComponent,{
      width:'250px'
    })
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllLoopMsg();
  }
  applyfilter(value: string){
    this.dataLoopMsg = [];
    if(value){
      this.rlqcService.getAll('loop_msg/'+value+'/'+value).pipe(first()).subscribe(element =>{
        for(let e of element){
          let member : LoopMsg = {
            msg_id : e.msg_id,
            guild: e.guild,
            content: e.content,
          }
          
          this.dataLoopMsg.push(member);
          this.dataSource.data = this.dataLoopMsg;
        }
      })
    }
    else{
      this.getAllLoopMsg();
    }
  }
  getAllLoopMsg(){
    this.dataLoopMsg = [];
    this.rlqcService.getAll('loop_msg').pipe(first()).subscribe(element =>{
      for(let e of element){
        let member : LoopMsg = {
          msg_id : e.msg_id,
          guild: e.guild,
          content: e.content,
        }
        
        this.dataLoopMsg.push(member);
        this.dataSource.data = this.dataLoopMsg;
      }
    })
  }
}
