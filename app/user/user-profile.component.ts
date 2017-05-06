import { Component, Input } from '@angular/core';
import { user } from '../shared/model/user'

@Component({
    selector: 'user-profile',
    templateUrl: 'app/user/user-profile.component.html'
})

export class UserProfileComponent {
    @Input() user: user;
}
