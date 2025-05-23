export interface Format {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonI[];
}

export interface PokemonI {
    name: string;
    url:  string;
}
