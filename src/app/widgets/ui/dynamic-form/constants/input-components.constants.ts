import { CustomInputComponent } from '../default-inputs/custom-input/custom-input.component';
import { TextInputComponent } from '../default-inputs/text-input/text-input.component';
import { ComponentFields } from '../models/dynamic-forms.models';
import { DEFAULT_INPUTS_COMPONENT_FIELD } from '../tokens/dynamic-forms.tokens';

export const inputComponents: ComponentFields = {
  textInput: TextInputComponent,
  customInput1: CustomInputComponent,
  customInput2: CustomInputComponent,
  customInput3: CustomInputComponent,
};

export const DEFAULT_LIB_INPUTS = [
  {
    provide: DEFAULT_INPUTS_COMPONENT_FIELD,
    useValue: inputComponents,
  },
];
