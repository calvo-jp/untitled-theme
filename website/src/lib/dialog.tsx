'use client';

import {styled} from '@/styled-system/jsx';
import {Dialog as ArkDialog} from '@ark-ui/react/dialog';

export const Dialog = ArkDialog.Root;
export const DialogBackdrop = styled(ArkDialog.Backdrop);
export const DialogCloseTrigger = styled(ArkDialog.CloseTrigger);
export const DialogContent = styled(ArkDialog.Content);
export const DialogDescription = styled(ArkDialog.Description);
export const DialogPositioner = styled(ArkDialog.Positioner);
export const DialogTitle = styled(ArkDialog.Title);
export const DialogTrigger = styled(ArkDialog.Trigger);
