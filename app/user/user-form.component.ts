import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/model/user';

@Component({
    selector: 'user-form',
    template: `
        <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
            <div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
                <input type="text" class="form-control" required="required" name="name" placeholder="Name"
                [(ngModel)]="newUser.name" #name="ngModel" >
                <span class="help-block" *ngIf="name.invalid && name.touched">Name is required</span>
            </div>
            <div class="form-group" [ngClass]="{ 'has-error': username.invalid && username.touched }">
                <input type="text" class="form-control" required="required" name="username" placeholder="User name"
                [(ngModel)]="newUser.username" #username="ngModel"/>
                <span class="help-block" *ngIf="username.invalid && username.touched">User name is required</span>
            </div>
            <button class="btn btn-lg btn-block btn-primary" type="submit" [disabled]="form.invalid">
                Create User
            </button>
        </form>
    `,
    styles: [`
        form {
            padding: 10px;
            background: #ECF0F1;
            border-radius: 3px;
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2);
        }
    `]
})

export class UserFormComponent {
    @Output() userCreated = new EventEmitter();
    newUser: User = new User();
    active: boolean = true;

    onSubmit() {
        this.userCreated.emit({ user: this.newUser });
        this.newUser = new User();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
