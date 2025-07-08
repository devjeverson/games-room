import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<any[]> {
    console.log('Making request to:', `${this.baseUrl}/games`);
    return this.http.get<any[]>(`${this.baseUrl}/games`).pipe(
      catchError(this.handleError)
    );
  }

  getGamesByPlatform(platform: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/games?platform=${platform}`).pipe(
      catchError(this.handleError)
    );
  }

  getGamesByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/games?category=${category}`).pipe(
      catchError(this.handleError)
    );
  }

  getGameById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/game?id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server error: ${error.status}, body: ${error.error}`);
    }
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}

