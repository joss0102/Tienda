import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {TabNotificationComponent} from '../tabs/tab-notification/tab-notification.component';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {SettingsComponent} from '../tabs/settings/settings.component';
import { PerfilComponent } from "../tabs/perfil/perfil.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-backoffice',
  imports: [
    NgIf,
    TabNotificationComponent,
    SettingsComponent,
    PerfilComponent,
    RouterModule
],
  standalone: true,
  templateUrl: './header-backoffice.component.html',
  styleUrl: './header-backoffice.component.scss'
})
export class HeaderBackofficeComponent {
  isActive: boolean = false;
  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
  }

  constructor(
    private sidebarStatusService: SidebarStatusService,
  ) {}

  toggleLogo() {
    this.isActive = !this.isActive;
    this.sidebarStatusService.changeStatus(this.isActive);
  }

  toggleItem(option: string) {
    if (this.isActiveItems[option]) {
      this.isActiveItems[option] = false;
    }
    else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      })
      this.isActiveItems[option] = true;
    }
  }

}
