import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DynamicFormComponent } from 'src/app/widgets/ui/dynamic-form/dynamic-form/dynamic-form.component';
import { DynamicFormConfig } from 'src/app/widgets/ui/dynamic-form/models/dynamic-forms.models';

@Component({
  standalone: true,
  selector: 'ng-welcome',
  templateUrl: './welcome.page.html',
  imports: [CommonModule, DynamicFormComponent, MatButtonModule],
})
export class WelcomePage {
  testFields: DynamicFormConfig[][] = [
    [
      {
        label: 'Nome',
        controlName: 'name',
        placeholder: 'Seu nome',
        validation: [Validators.required],
        type: 'textInput',
      },
      {
        label: 'Idade',
        controlName: 'age',
        placeholder: 'Sua idade',
        validation: [Validators.required],
        mask: '90',
        suffix: ' anos',
        type: 'textInput',
      },
    ],
  ];

  testFormGroup: FormGroup<{
    name: FormControl<string>;
    age: FormControl<string>;
  }>;

  alert() {
    alert(`
      Nome: ${this.testFormGroup.value.name}
      Idade: ${this.testFormGroup.value.age}
      `);
  }
}
