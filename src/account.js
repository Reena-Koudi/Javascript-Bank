function Account(){
  this.balance = 0;

}

Account.prototype.deposit = function(amount){
  return this.balance += amount;
};

Account.prototype.withdrawal = function(amount){
  return this.balance -= amount;
};
