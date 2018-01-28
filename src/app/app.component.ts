import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private authServise: AuthService) {
      authServise.handleAuthentication();
    }

    onAuthClick(e: Event) {
        e.stopPropagation();
        this.authServise.login();
    }

    onLogOutClick(e: Event) {
        e.stopPropagation();
        this.authServise.logout();
    }

    isAuthenticated(): boolean {
        return this.authServise.isAuthenticated();
    }
}
