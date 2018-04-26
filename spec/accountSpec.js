describe('Account', function(){
  var account

  beforeEach(function(){
    account = new Account();
  });

  it('adds money to the account', function(){
    expect(account.deposit(100)).toEqual(100);
  });
});
