import { create } from 'storybook/theming';
import wordmark from './snomed_wordmark.svg';

export default create({
    base: 'light',
    brandTitle: 'My custom Storybook',
    brandUrl: 'https://snomed.org',
    brandImage: wordmark,
    brandTarget: '_self',
});
