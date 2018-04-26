describe('Account', function(){
  var account

  beforeEach(function(){
    account = new Account();
  });

  it('account with default balance zero', function(){
    expect(account.displayBalance()).toEqual(0);
  });

  it('adds money to the account', function(){
    account.deposit(100)
    expect(account.displayBalance()).toEqual(100);
  });

  it('deducts money from the account', function(){
    account.deposit(200);
    account.withdrawal(100);
    expect(account.displayBalance()).toEqual(100);
  });
});
