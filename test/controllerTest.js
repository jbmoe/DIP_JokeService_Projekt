require('should');
const controller = require("../controller/controller");

describe('controller test - promise', function() {
    it('getJokes() test', async () => {
        let jokes = await controller.getJokes(); 
        jokes.length.should.be.greaterThanOrEqual(1);
        jokes[0].setup.should.be.equal('Hvorfor var blondinen glad for, at samle et puzzlespil på 6 måneder?')
        jokes[0].punchline.should.be.equal('Fordi der stod 2-4 år')
        jokes[1].punchline.should.be.equal('Han blev voldtaget af en ko')
    });
});