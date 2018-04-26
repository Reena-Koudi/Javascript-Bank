describe('Account', function(){
  var account

  beforeEach(function(){
    account = new Account();
  });

  it('adds money to the account', function(){
    expect(account.deposit(100)).toEqual(100);
  });

  it('deducts money from the account', function(){
    account.deposit(200);
    expect(account.withdrawal(100)).toEqual(100);
  });
});
