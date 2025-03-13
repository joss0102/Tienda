import {Component, OnInit} from '@angular/core';
import {SidebarStatusService} from '../../../services/status/sidebar-status.service';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../../services/auth/token.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isActiveMenuHeader: boolean = true;

  isLoggedIn: boolean = false;
  constructor(
    private sidebarStatusService: SidebarStatusService,
      private tokenService: TokenService,
  )
  {}

  ngOnInit(): void {
    this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveMenuHeader = status;
    })
    this.isLoggedIn = this.tokenService.hasAccessToken();
  }
  logout(): void {
    this.tokenService.clearTokens();
    this.isLoggedIn = false;
  }
}
