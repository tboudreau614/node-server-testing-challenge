const db = require('../data/dbConfig');
const MenuModel = require('./menuModel.js')

describe('menu model', ()=> {
    describe('insert()', ()=> {
    beforeEach(async ()=> {
        await db('menu').truncate()
    })
    it('should insert 2 items', async ()=>{
        await MenuModel.add({item: 'Soup' });
        await MenuModel.add({item:'Wontons' });

        const Menu = await db('menu');
        expect(Menu).toHaveLength(2)

    })
})
}) 