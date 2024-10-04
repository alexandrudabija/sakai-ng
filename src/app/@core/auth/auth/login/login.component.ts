import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/@core/services/app.layout.service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/@core/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    standalone: true,
    imports: [InputTextModule, PasswordModule, FormsModule, ReactiveFormsModule, CheckboxModule, ButtonModule, RouterLink]
})
export class LoginComponent implements OnInit {
    signInForm!: FormGroup;


    constructor(public layoutService: LayoutService, private auth: AuthService, private formBuilder: FormBuilder,) { }
    ngOnInit(): void {

        this.signInForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(1)]],
            rememberMe: [false]
        })



    }


    signInLocal(): void {

        this.auth.signInLocal(this.signInForm.value).subscribe(


            {
                next: (userCredentials) => {

                    this.auth.setCredentials(userCredentials)


                    // this.matSnackBar.open(`Wellcome ${userCredentials.firstName}  !`, '',
                    //     { verticalPosition: this.verticalPosition, duration: 3200 }
                    // );

                },
                error: (err) => {
                    console.log(err);


                    // this.matSnackBar.open(err.error.message, '',
                    //     { verticalPosition: this.verticalPosition, duration: 3200 }
                    // )



                }


                ,
                complete: () => {

                    // this.closeAuthDialogComponent();
                }
            }

        )

    }

}
