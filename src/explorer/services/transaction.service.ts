import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError as observableThrowError,  Observable } from 'rxjs';

import { Transaction } from '../models/transaction.model'

@Injectable()
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(`/explorer/api/transactions`)
      .pipe(catchError((error: any) => observableThrowError(error.json())));
  }

}
