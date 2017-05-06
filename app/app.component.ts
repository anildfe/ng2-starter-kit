import { Component } from '@angular/core'
import { User } from './shared/model/user'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    message: string = "Hello, there!";
    users: User[] = [{ id: 21, name: 'Anil', username: 'anildfe' },
    { id: 22, name: 'Ravi', username: 'ravidts' },
    { id: 23, name: 'Swathi', username: 'swathinayudu' }]
    activeUser: User;
    selectUser(user) {
        this.activeUser = user;
    }
    onUserCreated(event) {
        this.users.push(event.user);
    }
}
