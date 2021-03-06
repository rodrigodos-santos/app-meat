import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service';
import { User } from './user.model'
import { NotificationService } from './../../shared/messages/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private noficationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')
  }

  login(){
    this.loginService.login(this.loginForm.value.email, 
                            this.loginForm.value.password)
                      .subscribe( user => 
                                    this.noficationService.notify(`Bem vindo, ${user.name}`),
                                  response => //HttpErrorResponse
                                      this.noficationService.notify(response.error.message),
                                  () => {
                                    this.router.navigate([ atob(this.navigateTo)])
                                  })
  }
}
