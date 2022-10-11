import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Timeout } from 'src/app/shared/decorators/timeout.decorator';
import { DEFAULT_LIB_INPUTS } from '../constants/input-components.constants';
import { DynamicFieldDirective } from '../directives/dynamic-field.directive';
import { DynamicFormConfig } from '../models/dynamic-forms.models';

@Component({
  standalone: true,
  selector: 'ng-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  imports: [CommonModule, DynamicFieldDirective, ReactiveFormsModule],
  providers: [DEFAULT_LIB_INPUTS],
})
export class DynamicFormComponent<T> implements OnInit {
  formGroup = new FormGroup({});
  @Input() formType: T;
  @Input() formConfigs: DynamicFormConfig[][];
  @Output() formInstance = new EventEmitter();

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formConfigs
      .flatMap((formConfig) => formConfig)
      .forEach((control) => {
        this.formGroup.addControl(
          control.controlName,
          new FormControl(control.initialValue, control.validation)
        );
      });

    this.emitFormInstance();
  }

  @Timeout()
  emitFormInstance() {
    this.formInstance.emit(this.formGroup);
  }
}
