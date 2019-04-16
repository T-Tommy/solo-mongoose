const Tweet = require('../../lib/models/Tweet');
const mongoose = require('mongoose');


describe('tweetSchema tests', () => {
  it('creates a new instance of tweet', () => {
    const expected = {
      handle: 'Tommy',
      body: 'tweet4',
      tags: [],
      _id: expect.any(mongoose.Types.ObjectId)
    };
    const tweet = new Tweet({
      handle: 'Tommy',
      body: 'tweet4'
    });
    
    const error = tweet.validateSync();
    
    expect(error).toBeFalsy();
    expect(tweet.toJSON()).toEqual(expected);
  });

  it('requires a handle', () => {
    const tweet = new Tweet({
      body: 'tweet4'
    });
    const error = tweet.validateSync();
    expect(error).toBeTruthy();
  });

  it('limits characters (140)', () => {
    const tweet = new Tweet({
      handle: 'Tommy',
      body: '@'.repeat(141)
    });
  
    const error = tweet.validateSync();
    expect(error).toBeTruthy();
  });
});