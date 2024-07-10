export interface PersonaListProps {
    personaList : Persona[];
}

export interface PersonaProps {
    persona : Persona;
}

export interface Weather {
    temperature : number;
    condition   : string;
}

export interface GeoLocation {
    currentWeather : Weather;
    longitude      : number;
    latitude       : number;
}

export interface Name {
    first : string;
    last  : string;
}

export interface Persona {
    interests : string[];
    location  : GeoLocation;
    name      : Name;
    id        : number;
}

export interface SamplePersonaDataType {
    personas : Persona[];
}

export type RFC<T = unknown> = React.FC<T>;