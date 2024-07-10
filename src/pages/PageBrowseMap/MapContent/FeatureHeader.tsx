import {Box, Breadcrumbs, Text, rem } from '@mantine/core';
import { RFC } from '@app/ui/type';


export const FeatureHeader : RFC = () =>
    <Box>
        <Text
            fz={rem(72)}
            fw={200}>
            {'Persona Dash'}
        </Text>
        <Breadcrumbs>
            {'Home'}
            {'Products'}
            {'Persona Dash'}
        </Breadcrumbs>
    </Box>
