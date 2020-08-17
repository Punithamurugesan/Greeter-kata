const greet =  require("./index.js");

describe("greet", () => {
 
    it("return Hello punitha when enter punitha", () => {
       expect(greet('punitha')).toEqual('Hello punitha')    
    });
    it("trims the Hello punitha", () =>{
        expect(greet('Hello punitha....')).toEqual('Hello punitha')
    });
    it("Capitalise the first letter of the name when greated ", () => {
        expect (greet('Hello punitha')).toEqual('Hello Punitha')
    });

})
