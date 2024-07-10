import {Container, Grid, MantineProvider, ScrollArea } from '@mantine/core';
import { FeatureHeader } from './FeatureHeader';
import { SamplePersonaData } from './constant';
import classes from './MapContent.module.css';
import { PersonaList } from './PersonaList';
import { GeoMap } from './GeoMap';
import { RFC } from './type';
import React from 'react';


export const MapContent : RFC = () => {

    // Normally pulled from a selector, sample data provided
    const personaList = SamplePersonaData.personas;

    return (
        <Grid>
            <Grid.Col span={12}>
                <FeatureHeader />
            </Grid.Col>
            <Grid.Col span={{ base : 12 , lg : 5 }}>
                <ScrollArea>
                    <PersonaList personaList={personaList} />
                </ScrollArea>
            </Grid.Col>
            <Grid.Col
                span={{ md : 7}}
                visibleFrom='lg'>
                <Container
                    className={classes.googleMapContainer}
                    fluid={true}>
                    <GeoMap />
                </Container>
            </Grid.Col>
        </Grid>
    );
};
