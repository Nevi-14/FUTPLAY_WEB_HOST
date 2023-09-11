import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-promotion-tournament-dialog',
  templateUrl: './promotion-tournament-dialog.component.html',
  styleUrls: ['./promotion-tournament-dialog.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class PromotionTournamentDialogComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
