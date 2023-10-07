import '/src/styles/fonts.css';
import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyle } from '../src/styles/global';

const queryClient = new QueryClient();

const preview: Preview = {
    decorators: [
        (Story) => (
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Story />
            </QueryClientProvider>
        ),
    ],
    parameters: {
        backgrounds: { default: 'dark' },
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
