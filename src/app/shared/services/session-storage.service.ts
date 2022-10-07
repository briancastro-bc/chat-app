import { Injectable } from '@angular/core';

import { CustomStorage  } from '@core/store';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService extends CustomStorage {

  constructor() {
    super(sessionStorage);
  }
}
