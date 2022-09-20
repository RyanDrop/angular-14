import { InjectionToken } from '@angular/core';
import { ComponentFields } from '../models/dynamic-forms.models';

export const INPUTS_COMPONENT_FIELD = new InjectionToken<ComponentFields>(
  'inputs-component-field'
);

export const DEFAULT_INPUTS_COMPONENT_FIELD =
  new InjectionToken<ComponentFields>('default-inputs-component-field');
