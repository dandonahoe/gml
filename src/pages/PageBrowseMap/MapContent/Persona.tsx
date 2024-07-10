import { Badge, Box, Card, Group, Stack, Text, rem } from '@mantine/core';
import { LiaMapMarkerSolid } from 'react-icons/lia';
import {IconSun } from '@tabler/icons-react';
import classes from './Persona.module.css';
import { PersonaProps, RFC } from './type';



export const Persona : RFC<PersonaProps> = ({
    persona,
}) =>
    <Card
        className={classes.persona}
        withBorder={true}
        radius='md'
        p='md'
        mb='md'>
        <Group
            gap={0}
            justify='space-between'
            align='flex-start'>
            <Stack
                bg='var(--mantine-color-body)'
                justify='space-between'
                align='flex-start'>
                <Text
                    fz={rem(46)}
                    fw={200}>
                    {`${persona.name.last}, ${persona.name.first}`}
                </Text>
                <Group gap={0}>
                    <LiaMapMarkerSolid size={24} />
                    <Text
                        fz={rem(18)}>
                        {'Philadelphia, PA'}
                    </Text>
                </Group>
                <Box>
                    {persona.interests.map(interest =>
                        <Badge
                            mr='xs'
                            mb='xs'
                            variant='light'
                            color='indigo'
                            size='lg'
                            radius='md'
                            key={interest}>
                            {interest}
                        </Badge>,
                    )}
                </Box>
            </Stack>
            <Stack
                align='center'
                gap={0}>
                <Text fz={rem(36)}>
                    {'72°C'}
                </Text>
                <IconSun size={66} />
                <Text fz={rem(18)}>
                    {'Sunny'}
                </Text>
            </Stack>
        </Group>
    </Card>;
