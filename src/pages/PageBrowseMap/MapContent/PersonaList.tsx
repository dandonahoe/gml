import classes from './Persona.module.css';
import { PersonaListProps, RFC } from './type';
import {List } from '@mantine/core';
import { Persona } from './Persona';



export const PersonaList : RFC<PersonaListProps> = ({
    personaList,
}) =>
    <List
        className={classes.persona}
        p={0}
        mb='md'>
        {personaList.map(persona =>
            <Persona
                persona={persona}
                key={persona.id} />,
        )}
    </List>
