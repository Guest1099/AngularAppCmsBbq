import { Injectable } from '@angular/core';
import { AccountHandlerService } from './account/account-handler.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageSessionService {

  constructor(
    private accountHandlerService : AccountHandlerService
  ) { }

  public tokenTimeExpired() : boolean {
    let result = false;

    return result;
  }
}
