import { Component, OnInit} from '@angular/core';

@Component({
selector: '.app-servers',
templateUrl: './servers.component.html',
styleUrls: ['./servers/component.css']
})
export  class ServersComponent implements OnInit {
    createUsername = false;
    usernameCreationStatus = 'No Username created';
    userName = 'TestUser';

    constructor() {}

    ngOnInit() {
        
    }

    onCreateUser() {
      this.usernameCreationStatus = 'Username Created' + this.userName;
    }

    onUpdateUser(event: Event) {
      this.userName=(<HTMLInputElement>event.target).value;
    }
}