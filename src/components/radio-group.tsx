'use client';

import {styled} from '@/styled-system/jsx';
import {radioGroup} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {RadioGroup as ArkRadioGroup} from '@ark-ui/react/radio-group';

const {withProvider, withContext} = createStyleContext(radioGroup);

export const RadioGroup = withProvider(styled(ArkRadioGroup.Root), 'root');
export const RadioGroupIndicator = withContext(
	styled(ArkRadioGroup.Indicator),
	'indicator',
);
export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), 'item');
export const RadioGroupItemControl = withContext(
	styled(ArkRadioGroup.ItemControl),
	'itemControl',
);
export const RadioGroupItemText = withContext(
	styled(ArkRadioGroup.ItemText),
	'itemText',
);
export const RadioGroupLabel = withContext(
	styled(ArkRadioGroup.Label),
	'label',
);
