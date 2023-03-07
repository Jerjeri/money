let transactions = [];
let balance = 0;

function addTransaction() {
  const description = document.getElementById('description').value;
  const amount = Number(document.getElementById('amount').value);
  if (!description || !amount) {
    alert('Please enter a description and amount');
    return;
  }
  const transaction = { description, amount };
  transactions.push(transaction);
  updateTransactions();
  updateBalance();
}

function updateTransactions() {
  const transactionsDiv = document.getElementById('transactions');
  transactionsDiv.innerHTML = '<h2>Transactions:</h2>';
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const sign = transaction.amount > 0 ? '+' : '-';
    const transactionDiv = document.createElement('div');
    transactionDiv.innerText = `${transaction.description} ${sign}$${Math.abs(transaction.amount)}`;
    transactionsDiv.appendChild(transactionDiv);
  }
}

function updateBalance() {
  balance = 0;
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    balance += transaction.amount;
  }
  const balanceDiv = document.getElementById('balance');
  balanceDiv.innerHTML = `<h2>Balance: Rp${balance}</h2>`;
}