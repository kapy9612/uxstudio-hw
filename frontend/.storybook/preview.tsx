import '/src/styles/fonts.css';
import type { Preview } from '@storybook/react';

import { GlobalStyle } from '../src/styles/global';

const preview: Preview = {
    decorators: [
        (Story) => (
            <>
                <GlobalStyle />
                <Story />
            </>
        ),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
