'use client';

import {styled} from '@/styled-system/jsx';
import {dialog} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Dialog as ArkDialog} from '@ark-ui/react/dialog';

const {withProvider, withContext} = createStyleContext(dialog);

export const Dialog = withProvider(ArkDialog.Root);
export const DialogBackdrop = withContext(styled(ArkDialog.Backdrop), 'backdrop');
export const DialogCloseTrigger = withContext(styled(ArkDialog.CloseTrigger), 'closeTrigger');
export const DialogContent = withContext(styled(ArkDialog.Content), 'content');
export const DialogDescription = withContext(styled(ArkDialog.Description), 'description');
export const DialogPositioner = withContext(styled(ArkDialog.Positioner), 'positioner');
export const DialogTitle = withContext(styled(ArkDialog.Title), 'title');
export const DialogTrigger = withContext(styled(ArkDialog.Trigger), 'trigger');
