import { expect } from 'chai';
import 'mocha';
import { PlayerMatchup } from './app';

describe ('Test for app.ts', () => {
    it('Should output true when ranks are between 1 and 5', () => {
        const match1 = new PlayerMatchup('Donovan Mitchell', 4, 'Dillon Brooks', 3);
        const validMatch = match1.validInputs();
        expect(validMatch).to.eq(true);
    })
    it('Should output false when ranks are not between 1 and 5', () => {
        const match2 = new PlayerMatchup('Donovan Mitchell', 6, 'Dillon Brooks', 0);
        const validMatch = match2.validInputs();
        expect(validMatch).to.eq(false);
    })
    it('Should record accurate ranks', () => {
        const match3 = new PlayerMatchup('Donovan Mitchell', 3, 'Dillon Brooks', 2);
        const validMatch = match3.getTheScore();
        expect(offenseRank).to.eq(3);
        expect(defenseRank).to.eq(2);
    })
})