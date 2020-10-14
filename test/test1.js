var assert = require('assert').strict;
const chai = require ('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Items operations', function(){
    describe('Read items', function(){
        it('should respond an array of items', async function(){
        await chai.request('http://localhost:3000')
                .get('/items/search/:searchOption')
                .then(response => {
                    assert.strictEqual(response.status, 200);
                    expect(response.body).to.be.a('object');
                    expect(response.body).to.have.a.property('items');
                    expect(response.body.items).to.be.a('array');
                    expect(response.body.items[0]).to.have.a.property('id');
                    expect(response.body.items[0]).to.have.a.property('title');
                    expect(response.body.items[0]).to.have.a.property('description');
                    expect(response.body.items[0]).to.have.a.property('location');
                    expect(response.body.items[0]).to.have.a.property('images');
                    expect(response.body.items[0]).to.have.a.property('askingPrice');
                    expect(response.body.items[0]).to.have.a.property('dateOfPosting');
                    expect(response.body.items[0]).to.have.a.property('deliveryType');
                    expect(response.body.items[0]).to.have.a.property('additionalInfos');
                    expect(response.body.items[0].location).to.be.a('array');
                    expect(response.body.items[0].deliveryType).to.be.a('array');
                    expect(response.body.items[0].location).to.have.a.property('city');
                    expect(response.body.items[0].location).to.have.a.property('country');
                    expect(response.body.items[0].deliveryType).to.have.a.property('shipping');
                    expect(response.body.items[0].deliveryType).to.have.a.property('pickUp');
                })
                .catch(error => {
                    assert.fail(error)
                })
        })
    });

    describe('Add a new item', function() {
        it('should add a new item', async function(){
            await chai.request('http://localhost:3000')
                .post('/items/create')
                .then(readResponse => {
                    assert.strictEqual(response.status, 201);
                })
                .catch(error => {
                    assert.fail(error)
                })
        })
    });

    describe('Delete an item', function(){
        it('should delete an item', async function(){
            await chai.request('http://localhost:3000')
                .delete('/items/:itemId')
                .then(response => {
                    assert.strictEqual(response.status, 200)
                })
                .catch(error => {
                    assert.fail(error)
                })

        })
    });

    describe('Modify an item', function(){
        it('should modify an item', async function(){
            await chai.request('http://localhost:3000')
                .put('/items/:itemId')
                .then(response => {
                    assert.strictEqual(response.status, 200)
                })
                .catch(error => {
                    assert.fail(error)
                })

        })
    })
})






describe('User operations', function(){
    describe('Login', function(){
        it('should respond the authentification of the user', async function(){
        await chai.request('http://localhost:3000')
                .get('/login')
                .then(response => {
                    assert.strictEqual(response.status, 201);
                    expect(response.body).to.be.a('object');
                    expect(response.body).to.have.a.property('users');
                    expect(response.body.users).to.be.a('array');
                    expect(response.body.users[0]).to.be.of.prototype('object');
                    expect(response.body.users[0]).to.have.a.property('username');
                    expect(response.body.users[0]).to.have.a.property('password');
                    expect(response.body.users[0]).to.have.a.property('id')
                })
                .catch(error => {
                    assert.fail(error)
                })
        })
    });

    describe('Add a new user', function() {
        it('should add a new user', async function(){
            await chai.request('http://localhost:3000')
                .post('/users/create')
                .then(readResponse => {
                    assert.strictEqual(response.status, 201);
                })
                .catch(error => {
                    assert.fail(error)
                })
        })
    });

})