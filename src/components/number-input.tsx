'use client';

import {styled} from '@/styled-system/jsx';
import {numberInput} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {NumberInput as ArkNumberInput} from '@ark-ui/react/number-input';

const {withProvider, withContext} = createStyleContext(numberInput);

export const NumberInput = withProvider(styled(ArkNumberInput.Root), 'root');
export const NumberInputControl = withContext(
	styled(ArkNumberInput.Control),
	'control',
);
export const NumberInputInput = withContext(
	styled(ArkNumberInput.Input),
	'input',
);
export const NumberInputLabel = withContext(
	styled(ArkNumberInput.Label),
	'label',
);
export const NumberInputScrubber = withContext(
	styled(ArkNumberInput.Scrubber),
	'scrubber',
);
export const NumberInputDecrementTrigger = withContext(
	styled(ArkNumberInput.DecrementTrigger),
	'decrementTrigger',
);
export const NumberInputIncrementTrigger = withContext(
	styled(ArkNumberInput.IncrementTrigger),
	'incrementTrigger',
);
