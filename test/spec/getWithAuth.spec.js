const request = require("supertest")("http://restapi.adequateshop.com/api");
const expect = require("chai").expect;

const AUTH = "Bearer 5a24cbb-1b29-4b0f-9cb6-1914cff94e0"
 
describe("Post /users", function(){
    it("Get invalid auth token", async function(){
        const response = await request
                        .post("/users")
                        .send({
                            "name": "morpheus",
                            "job": "leader"
                        })
                        .set({
                            Authorization : AUTH,
                            Accept : "application/json"
                        });
        
        expect(await response.statusCode).to.eql(401)
        console.log(response);
    })
})