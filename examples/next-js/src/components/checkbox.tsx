'use client';

import {styled} from '@/styled-system/jsx';
import {checkbox} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Checkbox as ArkCheckbox} from '@ark-ui/react/checkbox';

const {withProvider, withContext} = createStyleContext(checkbox);

export const Checkbox = withProvider(styled(ArkCheckbox.Root), 'root');
export const CheckboxLabel = withContext(styled(ArkCheckbox.Label), 'label');
export const CheckboxIndicator = withContext(styled(ArkCheckbox.Indicator), 'indicator');
export const CheckboxControl = withContext(styled(ArkCheckbox.Control), 'control');
