import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { Account } from '../models';

@Component({
  selector: 'app-accounts-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accounts-list.component.html',
  styleUrl: './accounts-list.component.css',
})
export class AccountsListComponent implements OnInit {
  accounts: Account[] = [];
  loading = true;
  error = '';

  private typeLabels: Record<string, string> = {
    checking: 'עובר ושב',
    savings: 'חיסכון',
    business: 'עסקי',
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAccounts().subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        this.loading = false;
      },
      error: () => {
        this.error = 'שגיאה בטעינת החשבונות. ודאו שה-Backend רץ על פורט 3000.';
        this.loading = false;
      },
    });
  }

  typeLabel(type: string): string {
    return this.typeLabels[type] || type;
  }
}
