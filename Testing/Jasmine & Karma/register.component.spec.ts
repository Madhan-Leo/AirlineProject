import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('Register form Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();
  });

  it('To test the component created', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Register Component'`, () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Airline');
  });

  it('Register form Component GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myForm");
    const inputElements = formElement.querySelectorAll("input");

    expect(inputElements.length).toEqual(5);

  });

  it('Register form initial value', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    const myFormGroup = app.myForm;
    const myFormValues = {
      userId: "",
      userName: '',
      userPhoneno: "",
      userEmail: '',
      userPassword: '',
      userType: ''
    };
    expect(myFormGroup.value).toEqual(myFormValues);
  });

  it('Register form valid by valid data', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userId'].setValue("131");
    app.myForm.controls?.['userName'].setValue("Raja");
    app.myForm.controls?.['userPhoneno'].setValue("7867565434");
    app.myForm.controls?.['userEmail'].setValue("raja@gmail.com");
    app.myForm.controls?.['userPassword'].setValue("raja");
    app.myForm.controls?.['userType'].setValue("user");
    expect(app.myForm.valid).toBeTruthy();
  });

  it('Register form valid by invalid data', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const app = fixture.componentInstance;
    app.myForm.controls?.['userName'].setValue(" ");
    app.myForm.controls?.['userPhoneno'].setValue(0);
    app.myForm.controls?.['userEmail'].setValue(" ");
    app.myForm.controls?.['userPassword'].setValue(" ");
    app.myForm.controls?.['userType'].setValue(" ");
    expect(app.myForm.valid).toBeFalsy();
  });

}
)