'use client';

import {styled} from '@/styled-system/jsx';
import {toggleGroup} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {ToggleGroup as ArkToggleGroup} from '@ark-ui/react/toggle-group';

const {withProvider, withContext} = createStyleContext(toggleGroup);

export const ToggleGroup = withProvider(styled(ArkToggleGroup.Root), 'root');
export const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), 'item');
