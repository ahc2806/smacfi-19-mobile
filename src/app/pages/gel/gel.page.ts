import { GelService } from './../../services/gel.service';
import { Component, OnInit } from '@angular/core';
import { Gel } from 'src/app/models';
@Component({
  selector: 'app-gel',
  templateUrl: './gel.page.html',
  styleUrls: ['./gel.page.scss'],
})
export class GelPage implements OnInit {

  gel: any;

  constructor(private gelService: GelService) {
    this.gel = this.gelService.getGel();
  }

  ngOnInit() {

  }

}
