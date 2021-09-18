const { getLikesStrings } = require('./index.js');

describe('Testing the like string function', () => {
    it('Should return Monis and Anas Likes your post', () => {
        expect(getLikesStrings(['Monis', 'Anas'])).toEqual('Monis and Anas Likes your post');
    })
})