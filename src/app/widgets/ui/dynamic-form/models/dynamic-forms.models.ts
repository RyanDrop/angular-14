import { Type } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { DynamicControl } from './dynamic-control.models';

export type Fields =
  | 'textInput'
  | 'customInput1'
  | 'customInput2'
  | 'customInput3';

export type DynamicFormConfig = {
  type: Fields;
  label: string;
  controlName: string;
  mask?: string;
  suffix?: string;
  prefix?: string;
  initialValue?: any;
  placeholder?: string;
  validation?: ValidatorFn[];
  rangeDate?: boolean;
};

export type ComponentFields = {
  [Property in Fields]: Type<DynamicControl>;
};
