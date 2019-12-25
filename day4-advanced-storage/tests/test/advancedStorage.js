const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
    let advancedStorage = null;

    before(async () => {
        advancedStorage = await AdvancedStorage.deployed();
    });

    it('Should add a new number', async () => {
        await advancedStorage.add(1);
        // const result = await advancedStorage.get(0);
        const result = await advancedStorage.ids(0);
        assert(result.toNumber() === 1);
    })

    it('Should get a number from ids array', async () => {
        await advancedStorage.add(2);
        const result = await advancedStorage.get(0);
        assert(result.toNumber() === 1);
    })

    it('Should get all ids array', async () => {
        await advancedStorage.add(3);
        const rawIds = await advancedStorage.getAll();
        const ids = rawIds.map(id => id.toNumber());
        assert.deepEqual(ids, [1, 2, 3]);
    })

    it('Should check size of array', async () => {
        const result = await advancedStorage.length();
        console.log(result);
        console.log(result.toNumber());
        assert(result.toNumber() === 3);
    })
})