'use client';

import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { theme } from 'src/styles/theme';

interface Props {
    children: ReactNode;
}

const Provider = ({ children }: Props) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <JotaiProvider>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </JotaiProvider>
        </QueryClientProvider>
    );
};

export default Provider;