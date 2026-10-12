class BankAccount {
    public owner: string;
    private balance: number;
    protected accountType: string;

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = "Savings";
    }

    public showBalance(): void {
        console.log(this.balance);
    }
}

const account = new BankAccount("Hasan", 5000);

console.log(account.owner);
account.showBalance();