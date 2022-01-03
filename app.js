(async () => {
    const redis = require('redis');
    const client = await redis.createClient();
    await client.connect();

    await client.set('framework', 'Angular2'); // set values
    const value = await client.get('framework') // get values
    console.log(value)

    await client.set('working_days', 5);
    const noOfDays = await client.incr('working_days'); // increment
    console.log(noOfDays)

    const exists = await client.exists('framework'); // check existence
    console.log(exists)

    const deleted = await client.del('framework'); // delete keys
    console.log(deleted)

    const val = await client.get('framework') // get values
    console.log(val)

})();

