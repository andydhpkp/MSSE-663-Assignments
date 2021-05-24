// Source code here
interface Score {
    offense: number;
    defense: number;
}

export class FinalScore implements Score {
    constructor(
        public offense: number,
        public defense: number
        ){
            this.offense = offense;
            this.defense = defense;
        }
}

interface Matchup {
    offenseName: string;
    offenseRank: number;
    defenseName: string;
    defenseRank: number;

    validInputs: () => boolean;
    getWinner: () => Array<Score>; 
    
}

export class PlayerMatchup implements Matchup {
    constructor(
        public offenseName: string,
        public offenseRank: number,
        public defenseName: string,
        public defenseRank: number
    ){
        this.offenseName = offenseName;
        this.offenseRank = offenseRank;
        this.defenseName = defenseName;
        this.defenseRank = defenseRank;
    }

    validInputs(): boolean {
        if (this.offenseRank <= 5 && this.offenseRank > 0 && this.defenseRank <=5 && this.defenseRank > 0) {
            return true;
        } else {
            return false;
        }
    } 

    getTheScore(): Array<Score> {
        var defScore = 0;
        var offScore = 0;
        const defenseCheck = 1;
        const keepScore = Array.from({length: this.offenseRank}, 
            () => Math.floor(Math.random() * this.offenseRank));
        const matchRank = this.offenseRank - this.defenseRank;
        if (matchRank <= 0){
            defScore++;
        }
        var i: number;

        for (i = 0; i < keepScore.length; i++) {
            if (defenseCheck == keepScore[i]) {
                defScore ++;
            } else {
                offScore ++;
            }
        }
        let finalScore: number[] = new Array(offScore, defScore);
        const outputFinal = finalScore.map(score => {
            return new FinalScore(score[0], score[1]);
        })

        return outputFinal;
    }
}

const game = new PlayerMatchup('Donovan Mitchell', 4, 'Dillon Brooks', 3);
const isValid = game.validInputs();
const gameScore = game.getTheScore();

console.log('Valid Inputs: ${isValid}');
console.log('Offense Score: ${gameScore[0].offense}, Defense Score: ${gameScore[1].defense}');