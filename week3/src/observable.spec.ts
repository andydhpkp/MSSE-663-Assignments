import { export } from 'chai';
import 'mocha';
import { players, stream } from './observable';

describe('Observe test', () => {
    it('should output source stream of player names in an array', () => {
        stream.subscribe(val => {
            expect(val).to.eq(players);
        });
    });
});