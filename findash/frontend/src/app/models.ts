// models.ts - טיפוסי הנתונים של האפליקציה

export interface Account {
  id: string;
  ownerName: string;
  type: 'checking' | 'savings' | 'business';
  currency: string;
  openingBalance: number;
  iban: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  date: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  category: string;
  description: string;
}

export interface Balance {
  accountId: string;
  currency: string;
  balance: number;
  transactionCount: number;
}
