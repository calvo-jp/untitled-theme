'use client';

import {styled} from '@/styled-system/jsx';
import {switchRecipe} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Switch as ArkSwitch} from '@ark-ui/react/switch';

const {withProvider, withContext} = createStyleContext(switchRecipe);

export const Switch = withProvider(styled(ArkSwitch.Root), 'root');
export const SwitchControl = withContext(styled(ArkSwitch.Control), 'control');
export const SwitchLabel = withContext(styled(ArkSwitch.Label), 'label');
export const SwitchThumb = withContext(styled(ArkSwitch.Thumb), 'thumb');
