import powers from "../data/powers";

class Hero {
    constructor(
        public name   : string,
        public powerId: number,
        public age    : number
    ) { }

    get power(): string {
        return powers.find( power => power.id === this.powerId )!.desc || 'Not Found';
    }
}

class Hero2 { }
class Hero3 { }
class Hero4 { }

export default Hero;

