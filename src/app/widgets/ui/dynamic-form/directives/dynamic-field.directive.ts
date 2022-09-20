import {
  Directive,
  Inject,
  Input,
  OnInit,
  Optional,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { DynamicControl } from '../models/dynamic-control.models';
import {
  ComponentFields,
  DynamicFormConfig,
} from '../models/dynamic-forms.models';
import {
  DEFAULT_INPUTS_COMPONENT_FIELD,
  INPUTS_COMPONENT_FIELD,
} from '../tokens/dynamic-forms.tokens';

@Directive({
  selector: '[ngDynamicField]',
  standalone: true,
})
export class DynamicFieldDirective implements OnInit {
  @Input('ngDynamicField') formConfig: DynamicFormConfig;

  constructor(
    private viewContainerRef: ViewContainerRef,
    @Optional()
    @Inject(INPUTS_COMPONENT_FIELD)
    private readonly customInputsFields: ComponentFields,
    @Inject(DEFAULT_INPUTS_COMPONENT_FIELD)
    private readonly defaultCustomInputsFields: ComponentFields
  ) {}

  ngOnInit(): void {
    const currentType = this.formConfig.type;

    const hasCustomInputsFields =
      !!this.customInputsFields && !!this.customInputsFields[currentType];

    const hasDefaultCustomInputsFields =
      !!this.defaultCustomInputsFields &&
      !!this.defaultCustomInputsFields[currentType];

    if (hasCustomInputsFields) {
      this.createInputField(this.customInputsFields[currentType]);
      return;
    }

    if (!hasDefaultCustomInputsFields) {
      throw new Error('No input component found for type => ' + currentType);
    }

    this.createInputField(this.defaultCustomInputsFields[currentType]);
  }

  createInputField(field: Type<DynamicControl>) {
    const componentRef = this.viewContainerRef.createComponent(field);
    componentRef.instance.formConfig = this.formConfig;
  }
}
