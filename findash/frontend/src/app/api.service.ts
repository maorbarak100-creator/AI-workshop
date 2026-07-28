// api.service.ts - שכבת התקשורת מול ה-Backend

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account, Balance, Transaction } from './models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  // כתובת ה-Backend. שנו כאן אם השרת רץ בפורט אחר.
  private readonly baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.baseUrl}/accounts`);
  }

  getAccount(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.baseUrl}/accounts/${id}`);
  }

  getTransactions(id: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/accounts/${id}/transactions`);
  }

  getBalance(id: string): Observable<Balance> {
    return this.http.get<Balance>(`${this.baseUrl}/accounts/${id}/balance`);
  }
}
