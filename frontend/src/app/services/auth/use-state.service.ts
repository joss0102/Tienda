import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseStateService {

  private readonly USER_KEY = "tienda_online";

  constructor() { }

  save(username: string, role: string): void  {
    const userData = { username, role };
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(userData));
  }

  getUsername(): string | null {
    const session = this.getSessionData();
    return session ? session.username : null;
  }

  getRole(): string | null {
    const session = this.getSessionData();
    return session ? session.role : null;
  }

  removeSession(): void {
    sessionStorage.removeItem(this.USER_KEY);
  }

  private getSessionData(): { username: string, role: string } | null {
    const session = sessionStorage.getItem(this.USER_KEY);
    return session ? JSON.parse(session) : null;
  }
}
