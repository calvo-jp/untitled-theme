'use client';

import {styled} from '@/styled-system/jsx';
import {carousel} from '@/styled-system/recipes';
import {createStyleContext} from '@/utils/create-style-context';
import {Carousel as ArkCarousel} from '@ark-ui/react/carousel';

const {withProvider, withContext} = createStyleContext(carousel);

export const Carousel = withProvider(styled(ArkCarousel.Root), 'root');
export const CarouselControl = withContext(styled(ArkCarousel.Control), 'control');
export const CarouselIndicator = withContext(styled(ArkCarousel.Indicator), 'indicator');
export const CarouselIndicatorGroup = withContext(
  styled(ArkCarousel.IndicatorGroup),
  'indicatorGroup',
);
export const CarouselItem = withContext(styled(ArkCarousel.Item), 'item');
export const CarouselItemGroup = withContext(styled(ArkCarousel.ItemGroup), 'itemGroup');
export const CarouselNextTrigger = withContext(styled(ArkCarousel.NextTrigger), 'nextTrigger');
export const CarouselPrevTrigger = withContext(styled(ArkCarousel.PrevTrigger), 'prevTrigger');
export const CarouselViewport = withContext(styled(ArkCarousel.Viewport), 'viewport');
