import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    userId: number = 10;
    userStatus: string = 'created';

getUserCreatedStatus() {
    return this.userStatus;
 }
}
