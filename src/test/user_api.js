const fetch = require('node-fetch');
const chai = require('chai');
const expect = chai.expect;

describe('User Routes, Controller, and Factory (Unit Tests)',async()=>{

  it('User Routes, Controller, and Factory (Unit Tests)',async()=>{
      const response = await fetch('https://user-service-azky.onrender.com/get-all-users');
      expect(response.status).to.equal(200);
      const data = await response.json();
      console.log(data);
  }).timeout(50000);
})
