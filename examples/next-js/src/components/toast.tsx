'use client';

import {styled} from '@/styled-system/jsx';
import {toast as toastRecipe} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Toast as ArkToast, createToaster} from '@ark-ui/react/toast';
import {XIcon} from 'lucide-react';
import {Icon} from './icon';
import {IconButton} from './icon-button';

const {withProvider, withContext} = createStyleContext(toastRecipe);

export const Toast = withProvider(styled(ArkToast.Root), 'root');
export const ToastCloseTrigger = withContext(styled(ArkToast.CloseTrigger), 'closeTrigger');
export const ToastDescription = withContext(styled(ArkToast.Description), 'description');
export const ToastGroup = withContext(styled(ArkToast.Group), 'group');
export const ToastTitle = withContext(styled(ArkToast.Title), 'title');

export const [Toaster, toast] = createToaster({
  placement: 'bottom-end',
  render(toast) {
    return (
      <Toast>
        <ToastTitle>{toast.title}</ToastTitle>
        <ToastDescription>{toast.description}</ToastDescription>
        <ToastCloseTrigger asChild>
          <IconButton size="sm" variant="link">
            <Icon>
              <XIcon />
            </Icon>
          </IconButton>
        </ToastCloseTrigger>
      </Toast>
    );
  },
});
