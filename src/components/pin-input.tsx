'use client';

import {styled} from '@/styled-system/jsx';
import {pinInput} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {PinInput as ArkPinInput} from '@ark-ui/react/pin-input';

const {withProvider, withContext} = createStyleContext(pinInput);

export const PinInput = withProvider(styled(ArkPinInput.Root), 'root');
export const PinInputControl = withContext(styled(ArkPinInput.Control), 'control');
export const PinInputInput = withContext(styled(ArkPinInput.Input), 'input');
export const PinInputLabel = withContext(styled(ArkPinInput.Label), 'label');
