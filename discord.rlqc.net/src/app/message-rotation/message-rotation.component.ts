import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { first } from 'rxjs/operators';
import { loop_msg } from '../_models';
import { RLQCService } from '../_services';
import { MatDialog } from '@angular/material/dialog';
import { LoopmsgDialogComponent } from '../loopmsg-dialog/loopmsg-dialog.component';
import { NavbarService } from 'src/services/navbar-service.service';

const ELEMENT_DATA: loop_msg[] = [
];
let typingTimer:any;
let doneTypingInterval = 500;

@Component({
  selector: 'app-message-rotation',
  templateUrl: './message-rotation.component.html',
  styleUrls: ['./message-rotation.component.scss']
})
export class MessageRotationComponent implements AfterViewInit{
  
  public dataLoopMsg: loop_msg[] = [];
  private selectedGuild:string = "";
  displayedColumns: string[] = ['msg_id', 'content', ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private rlqcService: RLQCService, public dialog:MatDialog, private navbarService:NavbarService){

  }
  async ngOnInit(){
    this.navbarService.events$.forEach(event => this.selectedGuild = event);
  }
  openDialogAdd(){
    this.dialog.open(LoopmsgDialogComponent,{
      width:'600px'
    }).afterClosed().subscribe(result =>{
      this.getAllLoopMsg();
    });
  }
  openDialogModif(value:loop_msg){
    this.dialog.open(LoopmsgDialogComponent,{
      width:'600px',
      data:value,
    }).afterClosed().subscribe(result =>{
      this.getAllLoopMsg();
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllLoopMsg();
  }
  applyfilter(value: string){
    clearTimeout(typingTimer)
    typingTimer = setTimeout(()=>this.getSpecificLoopMsg(value), doneTypingInterval);
  }
  getSpecificLoopMsg(value: string){
    this.dataLoopMsg = [];
    if(value){
      this.rlqcService.getAll('loop_msg/'+value+'/'+value,this.navbarService.createHeader(this.selectedGuild)).pipe(first()).subscribe(element =>{
        for(let e of element){
          let member : loop_msg = {
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
    this.rlqcService.getAll('loop_msg',this.navbarService.createHeader(this.selectedGuild)).pipe(first()).subscribe(element =>{
      for(let e of element){
        let member : loop_msg = {
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
