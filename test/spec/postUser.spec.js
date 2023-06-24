//Create User
const request = require("supertest")("https://reqres.in/api");
const expect = require("chai").expect;
const userData = require("../../data/userData")
 
const dataUser = {
    name : "morp",
    job : "qa"
    //DATA DRIVEN TESTING
}


describe("Post /users", function(){
    it("create new user", async function(){
        const response = await request
                        .post("/users")
                        .send({
                            "name": userData.USER_DATA.name,
                            "job": userData.USER_DATA.job
                        });
        
        expect(await response.statusCode).to.eql(201)
        expect(await response.body.name).to.eql(userData.USER_DATA.name)
        expect(await response.body.job).to.eql(userData.USER_DATA.job)
    })
})