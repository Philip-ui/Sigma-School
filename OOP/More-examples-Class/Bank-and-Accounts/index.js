class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`You have deposited ${amount}. Your new balance is: ${this.balance}`);
  }

}

const account = new BankAccount('John Doe', 1000);
console.log(`Account Holder Name: ${account.accountHolderName} `);
console.log(`Balance: ${account.balance} `);
account.deposit(500);

