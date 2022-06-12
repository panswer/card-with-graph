import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface DayAmount {
  day: string,
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class DayAmountService {

  constructor(
    private http: HttpClient
  ) { }

  getAmountOfLastWeek() {
    return this
      .http
      .get<DayAmount[]>(
        '/assets/data.json'
      )
  }
}
