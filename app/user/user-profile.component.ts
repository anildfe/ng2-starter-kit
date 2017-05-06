import { Component, Input } from '@angular/core';
import { User } from '../shared/model/user'

@Component({
    selector: 'user-profile',
    templateUrl: 'app/user/user-profile.component.html',
    styles: [`
        .jumbotron {
            margin-top: 60px;
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
        }
    `]
})

export class UserProfileComponent {
    @Input() user: User;
}
