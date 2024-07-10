import { SamplePersonaDataType } from './type';


export const GOOGLE_MAPS_API_KEY = 'AIzaSyCSl3rEi6Cp3jy0vZfHoJ1wyELHZN-LdOE';

export const GoogleMapDefault = {
    zoom   : 14,
    center : {
        lat : 37.229572,
        lng : -80.413940,
    },
};

export const SamplePersonaData : SamplePersonaDataType = {
    personas : [{
        id   : 1,
        name : {
            first : 'Jane',
            last  : 'Doe',
        },
        interests : [
            'baseball',
            'puzzles',
        ],
        location : {
            latitude       : 38.9072,
            longitude      : -77.0369,
            currentWeather : {
                condition   : 'cloudy',
                temperature : 36.4,
            },
        },
    }, {
        id   : 2,
        name : {
            first : 'John',
            last  : 'Doe',
        },
        interests : [
            'football',
            'mountain biking',
        ],
        location : {
            latitude       : 43.8041,
            longitude      : -120.5541,
            currentWeather : {
                condition   : 'sunny',
                temperature : 25.7,
            },
        },
    }, {
        id   : 3,
        name : {
            first : 'Bob',
            last  : 'Smith',
        },
        interests : [
            'piano',
            'board games',
        ],
        location : {
            latitude       : 31.9685,
            longitude      : -99.9018,
            currentWeather : {
                condition   : 'sunny',
                temperature : 40.11,
            },
        },
    }],
}
