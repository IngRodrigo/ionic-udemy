import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  //@input sirve para capturar la informacion que viene desde un componente padre
  @Input() mensaje:any;
  @Output() clickPost = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPost.emit(this.mensaje.id);
  }
}
