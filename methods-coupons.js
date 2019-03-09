import { Coupons } from 'meteor/igoandsee:coupons-collection';
import shortid from 'shortid';

Meteor.methods({
  createCouponUser(result) {
    var userRegister = {};

    userRegister.name = result.name;
    userRegister.email = result.email;
    userRegister.company = result.company;
    userRegister.coupon = shortid.generate();
    userRegister.max = 1;
    userRegister.uses = 0;

    let coupon = Coupons.insert(userRegister);
    console.log('Creación exitosa', userRegister);

    return coupon;
  },
  
  getCouponUser() {
    return Coupons.find().fetch();
  }
});