import { Injectable } from '@angular/core';

import { CustomStorage  } from '@core/store';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends CustomStorage {

  constructor() {
    super(localStorage);
  }
}
