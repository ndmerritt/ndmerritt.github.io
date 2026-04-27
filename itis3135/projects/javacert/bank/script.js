class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.balance += amount;
    this.transactions.push({ type: "deposit", amount });

    return `Successfully deposited $${amount}.`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount });

    return `Successfully withdrew $${amount}.`;
  }

  getBalance() {
    return this.balance;
  }
}





const account = new BankAccount();

const balanceEl = document.getElementById("balance");
const messageEl = document.getElementById("message");
const listEl = document.getElementById("transaction-list");

const depositInput = document.getElementById("deposit-amount");
const withdrawInput = document.getElementById("withdraw-amount");

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

function updateUI() {
  balanceEl.textContent = `$${account.getBalance()}`;
  listEl.innerHTML = "";

  account.transactions.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = `${t.type.toUpperCase()}: $${t.amount}`;
    listEl.appendChild(li);
  });
}

depositBtn.addEventListener("click", () => {
  const amount = Number(depositInput.value);

  const msg = account.deposit(amount);
  messageEl.textContent = msg;

  depositInput.value = "";
  updateUI();
});

withdrawBtn.addEventListener("click", () => {
  const amount = Number(withdrawInput.value);

  const msg = account.withdraw(amount);
  messageEl.textContent = msg;

  withdrawInput.value = "";
  updateUI();
});

updateUI();