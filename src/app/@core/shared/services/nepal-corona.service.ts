import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  NepalCoronaInfoUrlConstant,
  DataNepalCoronaInfoUrlConstant,
} from '../constants';
import { retry, catchError } from 'rxjs/operators';

const BASE_URL = environment.nepal_corona_url;
const BASE_DATA_URL = environment.data_nepal_corona_url;

@Injectable({
  providedIn: 'root',
})
export class NepalCoronaService {
  NCIurl = NepalCoronaInfoUrlConstant;
  DNCIurl = DataNepalCoronaInfoUrlConstant;

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/JSON',
    }),
  };

  constructor(private http: HttpClient) {}

  getNepalTestingSummaryData(): Observable<any> {
    return this.http
      .get(`${BASE_URL}${this.NCIurl.nepalTestingSummary}`)
      .pipe(retry(1), catchError(this.errorHandle));
  }

  getNepalDetailedCasesSummaryData(): Observable<any> {
    return this.http.get(
      `${BASE_DATA_URL}${this.DNCIurl.detailedCasesSummary}`
    );
  }

  getDistrictList(): Observable<any> {
    return this.http
      .get(`${BASE_DATA_URL}${this.DNCIurl.districtList}`)
      .pipe(retry(1), catchError(this.errorHandle));
  }

  getNepalCasesTimeline(): Observable<any> {
    return this.http
      .get(`${BASE_DATA_URL}${this.DNCIurl.casesTimeLine}`)
      .pipe(retry(1), catchError(this.errorHandle));
  }

  errorHandle({ error }) {
    if (error.error && error.message) {
      return throwError(error.message);
    }
  }
}
