export class City {
    name: string;
    country: string;
    subcountry: string;
    geonameid: number;

    deserialize(input: any) {
        return Object.assign(new City(), input);
    }
}