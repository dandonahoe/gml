import { GOOGLE_MAPS_API_KEY, GoogleMapDefault } from './constant';
import GoogleMapReact from 'google-map-react';
import { RFC } from '@app/ui/type';


export const GeoMap : RFC = () =>
    <GoogleMapReact
        defaultCenter={GoogleMapDefault.center}
        defaultZoom={GoogleMapDefault.zoom}
        bootstrapURLKeys={{
            key : GOOGLE_MAPS_API_KEY,
        }} />


