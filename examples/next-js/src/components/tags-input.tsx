'use client';

import {styled} from '@/styled-system/jsx';
import {tagsInput} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {TagsInput as ArkTagsInput} from '@ark-ui/react/tags-input';

const {withProvider, withContext} = createStyleContext(tagsInput);

export const TagsInput = withProvider(styled(ArkTagsInput.Root), 'root');
export const TagsInputClearTrigger = withContext(styled(ArkTagsInput.ClearTrigger), 'clearTrigger');
export const TagsInputControl = withContext(styled(ArkTagsInput.Control), 'control');
export const TagsInputInput = withContext(styled(ArkTagsInput.Input), 'input');
export const TagsInputItem = withContext(styled(ArkTagsInput.Item), 'item');
export const TagsInputItemDeleteTrigger = withContext(
	styled(ArkTagsInput.ItemDeleteTrigger),
	'itemDeleteTrigger',
);
export const TagsInputItemInput = withContext(styled(ArkTagsInput.ItemInput), 'itemInput');
export const TagsInputItemPreview = withContext(styled(ArkTagsInput.ItemPreview), 'itemPreview');
export const TagsInputItemText = withContext(styled(ArkTagsInput.ItemText), 'itemText');
export const TagsInputLabel = withContext(styled(ArkTagsInput.Label), 'label');
