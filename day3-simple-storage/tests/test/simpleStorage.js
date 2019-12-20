const SimpleStorage = artifacts.require('SimpleStorage');

contract('SimpleStorage', () => {
    it('Should set the value of the data variable', async () => {
        const simpleStorage = await SimpleStorage.deployed();
        await simpleStorage.set('this is a new value');
        const result = await simpleStorage.get();
        
        console.log(result)
        assert(result === 'this is a new value');
    })
})