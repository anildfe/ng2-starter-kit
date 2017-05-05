import { Component } from '@angular/core'
import { user } from './shared/model/user'

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-inverse">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">My First Angular 2 App!</a>
                </div>
            </nav>
        </header>
        <div class="main">
            <div class="row">
                <div class="col-sm-4">
                <h3>My Users</h3>
                <ul *ngIf="users" class="list-group users-list">
                    <li class="list-group-item"
                    *ngFor="let user of users"
                    (click)="selectUser(user)"
                    [class.active]="user === activeUser">
                        {{user.name}} ({{user.username}})
                    </li>
                </ul>
                </div>
                <div class="col-sm-8">
                <div class="jumbotron"
                *ngIf="activeUser">
                    <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>
                </div>
                <div class="jumbotron"
                *ngIf="!activeUser">
                    <span class="glyphicon glyphicon-hand-left"></span>
                    <h2>Choose a user</h2>
                </div>

                </div>
            </div>
        </div>
        <footer class="text-center">Copyright @copy 2017</footer>
    `,
    styles: [`
        .users-list li {
            cursor: pointer;
        }
        .jumbotron {
            margin-top: 60px;
        }
        .jumbotron .glyphicon {
            font-size: 80px;
        }
    `]
})

export class AppComponent {
    message: string = "Hello, there!";
    users: user[] = [{ id: 21, name: 'Anil', username: 'anildfe' },
    { id: 22, name: 'Ravi', username: 'ravidts' },
    { id: 23, name: 'Swathi', username: 'swathinayudu' }]
    activeUser: user;
    selectUser(user) {
        this.activeUser = user;
    }
}
