// const body = {
//     bodykey: "bodyValue"
describe("httpbin tests", () => {
    it('response code should be 200',()=>{
       const request = {
        method: "GET",
        url: "https://reqres.in/api/users/2",
       };

       cy.request(request).then(resp =>{
        assert.equal("janet.weaver@reqres.in", resp.body.data.email)
       })
    })

it('stud test',()=>{
    cy.intercept({
     method: "GET",
     url: "https://reqres.in/api/users/2",
    }).as('getUsers');

})
    })
 

    //        cy.request(request).then(response => {
            
        
    //          assert.equal(201,respons.status);

    //         assert.equal("Mykola", respons.request.body.name);

    //         assert.isTrue(respons.duration <= 2000)
    //     })
    // }

const request = {
      method: "GET",      
    url: 'https://httpbin.org/headers',
    headers: {
        "Cookie": "cookieName=cookieValue"
    },
    failOnStatusCode: false
};

describe("httpbin tests", ()=>{
    it('response code should be 200',()=>{
        cy.request(request).then(response => {
            assert.equal(200,response.status);

            assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
        })
    })
 })

describe('public api 1',() =>{
    it ('response code should be 200 ', ()=>{
        const request = {
            method: 'GET',
            url: 'https://whiskyhunter.net/api/',
            
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        
        })
    })
})



describe('publik api 2',() =>{
    it ('response code should be 200', ()=>{
        const request = {
            method: "GET",
            url: "https://whiskyhunter.net/api/auctions_data/",
             headers: {
                "content-language": "en" 
             },
           failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        assert.equal("en", response.requestHeaders["content-language"])
         })
    })
})


describe('publik api 3',() =>{
    const bodyName = {
       "name" : "Abhainn Dearg",
    };
    const request = {
        method: "GET",
        url: "https://whiskyhunter.net/api/distilleries_info/",
        body: bodyName,
        failOnStatusCode: false
    }
it('test complex response body', () => {
    cy.request(request).then(response => {
      assert.notStrictEqual(bodyName, response.body.name);
    })
  })
})


describe('public api 4',() =>{
        const request = {
           method: 'GET',
            url: 'https://whiskyhunter.net/api/auctions_info',
            
            failOnStatusCode: false
        };
        it ('test single response body key', ()=>{
        cy.request(request).then(response => {
            const expectedBody = {
                slug: "highland-whisky-auctions"
            };
        assert.equal(200,response.status);
        assert.notStrictEqual(expectedBody, response.body);
        assert.isTrue(response.duration <= 1500);
        })
    })
})

describe('public api 5',() =>{
    it ('response api ', ()=>{  
        const request = {
           method: 'POST',
            url: "https://nameday.abalin.net/api/V1/tomorrow",
               headers : {
                "country": "sk",
                "timezone": "Australia/North",
            },  
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        assert.equal("sk", response.requestHeaders["country"]);
        assert.equal("Australia/North", response.requestHeaders["timezone"])
        })
    })
})

describe('public api whisky  6',() =>{
        it('response code should be 200',()=>{
                   function getRandomInt(max) {
                    return Math.floor(Math.random() *max)
                   }
                      
                   for (let index = 0; index < 8; index++) {
                    const randomname = getRandomInt(100);
            
                    const request = {
                        url: 'https://whiskyhunter.net/api/auctions_info',
                        name: randomname
                    };
                    cy.request(request).then(respons => {
                assert.isTrue(respons.status ==200)
            
                    })
                }
            })
})


describe('public api 7',() =>{
    it ('response code should be 200 ', ()=>{
         const request = {
        method: 'GET',
            url: "https://www.balldontlie.io/api/v1/players/237",
            qs:{
            "id":237,
            },
               
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        assert.equal(237, response.body.id)
        })
    })
})


describe('public api 8',() =>{
    it ('response code should be 200 ', ()=>{
        const request = {
           method: 'GET',
            url: 'https://whiskyhunter.net/api/auctions_info',
             headers: {
                'user-agent': "My test user-agent"
             },  
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        assert.equal("My test user-agent", response.requestHeaders['user-agent'])
        })
    })
})

describe('public api 9',() =>{
    it ('response code should be 200 ', ()=>{
             const request = {
           method: 'POST',
            url: "https://nameday.abalin.net/api/V1/yesterday",
             headers: {
                "country": "us",
                "timezone": "Chile/EasterIsland",
             },  
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        assert.equal("us", response.requestHeaders["country"]);
        assert.equal("Chile/EasterIsland", response.requestHeaders["timezone"])
        })
     })
 })

 describe('public api 10',() =>{
    it ('response code should be 200 ', ()=>{
             const request = {
           method: 'POST',
            url:"https://nameday.abalin.net/api/V1/tomorrow",
             headers: {
                "country": "sk",
                "timezone": "Australia/North",
                 
             },  
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        assert.equal("Australia/North", response.requestHeaders["timezone"]);
        assert.equal("sk", response.requestHeaders["country"])
        })
     })
 })

 describe('public api 7',() =>{
    it ('response code should be 200 ', ()=>{
         const request = {
        method: 'GET',
            url: "https://libretranslate.com/languages",
        
               
            failOnStatusCode: false
        };
        cy.request(request).then(response => {
        assert.equal(200,response.status);
        })
    })
})