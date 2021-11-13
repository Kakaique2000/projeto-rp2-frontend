import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss']
})
export class MarkdownViewerComponent implements OnInit {

  constructor() { }

  @Input()
  data: string;

  ngOnInit(): void {
  }

}
