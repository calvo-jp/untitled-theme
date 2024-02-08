'use client';

import {styled} from '@/styled-system/jsx';
import {popover} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Popover as ArkPopover} from '@ark-ui/react/popover';

const {withProvider, withContext} = createStyleContext(popover);

export const PopoverRoot = withProvider(ArkPopover.Root);
export const PopoverAnchor = withContext(styled(ArkPopover.Anchor), 'anchor');
export const PopoverArrow = withContext(styled(ArkPopover.Arrow), 'arrow');
export const PopoverArrowTip = withContext(
	styled(ArkPopover.ArrowTip),
	'arrowTip',
);
export const PopoverCloseTrigger = withContext(
	styled(ArkPopover.CloseTrigger),
	'closeTrigger',
);
export const PopoverContent = withContext(
	styled(ArkPopover.Content),
	'content',
);
export const PopoverDescription = withContext(
	styled(ArkPopover.Description),
	'description',
);
export const PopoverIndicator = withContext(
	styled(ArkPopover.Indicator),
	'indicator',
);
export const PopoverPositioner = withContext(
	styled(ArkPopover.Positioner),
	'positioner',
);
export const PopoverTitle = withContext(styled(ArkPopover.Title), 'title');
export const PopoverTrigger = withContext(
	styled(ArkPopover.Trigger),
	'trigger',
);
