import { Component, OnInit } from '@angular/core';
import { AppCardComponent } from '../ui/app-card/app-card.component';
import { VideocallService } from '../../services/videocall.service';
@Component({
  selector: 'app-dashboard',
  imports: [AppCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  /**
   *
   */
  constructor(private videoCallService: VideocallService) {}
  ngOnInit(): void {
    this.videoCallService.startConnection().subscribe(() => {
      this.videoCallService.receiveMessage().subscribe((message) => {});
    });
  }
}
