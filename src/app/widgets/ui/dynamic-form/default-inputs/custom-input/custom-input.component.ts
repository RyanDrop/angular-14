import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicControl } from '../../models/dynamic-control.models';
import { DynamicFormConfig } from '../../models/dynamic-forms.models';

@Component({
  selector: 'ng-custom-input',
  template: '',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class CustomInputComponent implements DynamicControl, OnInit {
  @Input() formConfig: DynamicFormConfig;

  ngOnInit(): void {
    throw new Error(
      `${this.formConfig.label} => For custom inputs, define your providers!  INPUTS_COMPONENT_FIELD or DEFAULT_INPUTS_COMPONENT_FIELD`
    );
  }
}
