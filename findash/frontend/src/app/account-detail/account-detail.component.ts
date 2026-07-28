import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Account, Balance, Transaction } from '../models';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css',
})
export class AccountDetailComponent implements OnInit {
  account?: Account;
  balance?: Balance;
  transactions: Transaction[] = [];
  loading = true;
  error = '';

  private categoryLabels: Record<string, string> = {
    salary: 'משכורת',
    rent: 'שכר דירה',
    groceries: 'מזון',
    electronics: 'אלקטרוניקה',
    transfer: 'העברה',
    interest: 'ריבית',
    car: 'רכב',
    invoice: 'חשבונית',
    supplier: 'ספק',
    payroll: 'שכר עובדים',
    other: 'אחר',
  };

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.api.getAccount(id).subscribe({
      next: (account) => (this.account = account),
      error: () => (this.error = 'החשבון לא נמצא.'),
    });

    this.api.getBalance(id).subscribe({
      next: (balance) => (this.balance = balance),
    });

    this.api.getTransactions(id).subscribe({
      next: (transactions) => {
        this.transactions = transactions;
        this.loading = false;
      },
      error: () => {
        this.error = 'שגיאה בטעינת התנועות. ודאו שה-Backend רץ.';
        this.loading = false;
      },
    });
  }

  categoryLabel(category: string): string {
    return this.categoryLabels[category] || category;
  }

  formatAmount(amount: number, currency: string): string {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: currency || 'ILS',
    }).format(amount);
  }
}
