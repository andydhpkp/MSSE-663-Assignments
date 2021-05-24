// Source code here
import { of } from 'rxjs';

export const players = ['Donovan Mitchell', 'Rudy Gobert', 'Joe Ingles', 'Ja Morant', 'Jonas Valunciunas', 'Dillon Brooks'];
export const stream = of(players);

stream.subsrcibe(val => {
    console.log(val);
});