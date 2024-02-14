'use client';

import {styled} from '@/styled-system/jsx';
import {tooltip} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Tooltip as ArkTooltip} from '@ark-ui/react/tooltip';

const {withProvider, withContext} = createStyleContext(tooltip);

export const Tooltip = withProvider(ArkTooltip.Root);
export const TooltipArrow = withContext(styled(ArkTooltip.Arrow), 'arrow');
export const TooltipArrowTip = withContext(styled(ArkTooltip.ArrowTip), 'arrowTip');
export const TooltipContent = withContext(styled(ArkTooltip.Content), 'content');
export const TooltipPositioner = withContext(styled(ArkTooltip.Positioner), 'positioner');
export const TooltipTrigger = withContext(styled(ArkTooltip.Trigger), 'trigger');
