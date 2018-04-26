function Account(){
  this.balance = 0;

}

Account.prototype.displayBalance = function(){
  return this.balance;
};

Account.prototype.deposit = function(credit){
  return this.balance += credit;
};

Account.prototype.withdrawal = function(debit){
  return this.balance -= debit;
};
