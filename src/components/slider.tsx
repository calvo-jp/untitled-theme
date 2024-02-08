'use client';

import {styled} from '@/styled-system/jsx';
import {slider} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Slider as ArkSlider} from '@ark-ui/react/slider';

const {withProvider, withContext} = createStyleContext(slider);

export const Slider = withProvider(styled(ArkSlider.Root), 'root');
export const SliderControl = withContext(styled(ArkSlider.Control), 'control');
export const SliderLabel = withContext(styled(ArkSlider.Label), 'label');
export const SliderMarker = withContext(styled(ArkSlider.Marker), 'marker');
export const SliderMarkerGroup = withContext(
	styled(ArkSlider.MarkerGroup),
	'markerGroup',
);
export const SliderRange = withContext(styled(ArkSlider.Range), 'range');
export const SliderThumb = withContext(styled(ArkSlider.Thumb), 'thumb');
export const SliderTrack = withContext(styled(ArkSlider.Track), 'track');
export const SliderValueText = withContext(
	styled(ArkSlider.ValueText),
	'valueText',
);
