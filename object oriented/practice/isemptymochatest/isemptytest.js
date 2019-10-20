"use strict";
describe("isEmpty",function(){
   it("istrue is empty",function(){
      assert.isTrue(isEmpty({}));
    });

   it("isfalse if it exists",function(){
     assert.isFalse(isEmpty({
         name:false
        }));
   });
});
// describe("isEmpty", function() {
//     it("returns true for an empty object", function() {
//       assert.isTrue(isEmpty({}));
//     });
  
//     it("returns false if a property exists", function() {
//       assert.isFalse(isEmpty({
//         anything: false
//       }));
//     });
//   });