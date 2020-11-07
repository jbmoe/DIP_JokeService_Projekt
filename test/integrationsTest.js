require('should');
const request = require('supertest');
const controller = require('../controller/controller');
const app = require('../app.js');
const { response } = require('../app.js');

describe('integration test - promise', function () {

    it("get('/') test", function () {
        return request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/);
    });

    it("get('/api/jokes') test", async () => {
        let response = await request(app)
            .get('/api/jokes')
            .expect(200)
            .expect('Content-Type', /json/);
        response.body.length.should.be.greaterThanOrEqual(1);
        response.body[0].setup.should.be.equal('Hvorfor var blondinen glad for, at samle et puzzlespil på 6 måneder?')
        response.body[0].punchline.should.be.equal('Fordi der stod 2-4 år')
    })

    it("post('/jokes') test", async () => {
        let response = await request(app)
            .post('/api/jokes')
            .send({
                setup: 'Integration-test setup',
                punchline: 'Integration-test punchline'
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .expect(201);
        response = await controller.getJokes();
        response.length.should.be.greaterThanOrEqual(1);
        response[response.length-1].setup.should.be.equal('Integration-test setup')
        response[response.length-1].punchline.should.be.equal('Integration-test punchline');
    })
});
