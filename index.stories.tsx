// React Components
import * as React from 'react';

// Feward Components
import Animation, { FAnimationProps } from './index';

// Storybook
import { Meta } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

addDecorator(withPerformance);

export default {
   title: 'Atoms/Animation',
   component: Animation,
   argTypes: {
      className: { control: { type: 'radio', options: ['fade-in', 'wiggle'] } },
   }
} as Meta;

export const Story = ({ className }: FAnimationProps) => (
   <Animation className={className}>You can put any object here</Animation>
);

Story.args = {
   className: 'fade-in' // This value is set by default, you can change it. There are two options for now, fade-in and wiggle, all by lowercase
};