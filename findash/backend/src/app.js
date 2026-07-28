// app.js
// הגדרת אפליקציית ה-Express: middleware ו-routes של ה-API.

const express = require('express');
const cors = require('cors');
const repository = require('./repository');
const balanceService = require('./services/balanceService');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // בדיקת חיות
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'findash-backend' });
  });

  // רשימת כל החשבונות
  app.get('/api/accounts', (req, res) => {
    res.json(repository.getAccounts());
  });

  // חשבון בודד
  app.get('/api/accounts/:id', (req, res) => {
    const account = repository.getAccountById(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json(account);
  });

  // תנועות של חשבון
  app.get('/api/accounts/:id/transactions', (req, res) => {
    const account = repository.getAccountById(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    const transactions = repository
      .getTransactionsByAccount(req.params.id)
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1)); // מהחדש לישן
    res.json(transactions);
  });

  // יתרת חשבון
  app.get('/api/accounts/:id/balance', (req, res) => {
    const result = balanceService.calculateBalance(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json(result);
  });

  // הוספת תנועה חדשה (הפקדה / משיכה)
  app.post('/api/accounts/:id/transactions', (req, res) => {
    const account = repository.getAccountById(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    const { type, amount, category, description } = req.body;
    if (!['deposit', 'withdrawal'].includes(type)) {
      return res.status(400).json({ error: "type must be 'deposit' or 'withdrawal'" });
    }
    if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: 'amount must be a positive number' });
    }

    const transaction = {
      id: `txn-${Date.now()}`,
      accountId: account.id,
      date: new Date().toISOString().slice(0, 10),
      type,
      amount,
      category: category || 'other',
      description: description || '',
    };
    repository.addTransaction(transaction);
    res.status(201).json(transaction);
  });

  return app;
}

module.exports = { createApp };
