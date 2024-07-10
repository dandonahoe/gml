import { AppShell, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MapContent } from './MapContent';
import { HeaderSimple } from './Header';
import { AppTheme } from './AppTheme';
import { ReactNode } from 'react';


export const PageBrowseMap = () : ReactNode => {

    const [opened, { toggle : _toggle }] = useDisclosure();

    return (
        <MantineProvider theme={AppTheme} >
            <AppShell
                header={{ height : 60 }}
                navbar={{
                    width      : 300,
                    breakpoint : 'sm',
                    collapsed  : { mobile : !opened },
                }}
                padding='md'>
                <AppShell.Header>
                    {'HEADER'}
                    <HeaderSimple />
                </AppShell.Header>
                <AppShell.Navbar p='md'>
                </AppShell.Navbar>
                <AppShell.Main>
                    <MapContent />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
