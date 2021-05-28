import { expect } from 'chai';
import 'mocha';
import { idText } from 'typescript';
import { allContestants, newNumbers, newPersons, newUpdates, originalContestants, originalNumbers, originalPersons, originalUpdates } from './spread';

describe('Spread Assignments Tests', () => {
    
    it('Should be equal to originalNumbers', () => {
        expect(newNumbers).to.eq(originalNumbers);
    });

    it('Should be equal to originalContestants', () => {
        expect(allContestants).to.eq(originalContestants);
    });

    it('Should be equal to originalpersons', () => {
        expect(newPersons).to.eq(originalPersons);
    });

    it('Should be equal to originalUpdates', () => {
        expect(newUpdates).to.eq(originalUpdates);
    });
});