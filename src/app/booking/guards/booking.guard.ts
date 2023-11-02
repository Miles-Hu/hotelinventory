import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<BookingComponent> {

  constructor(private _snackBar: MatSnackBar) { }

  canDeactivate(component: BookingComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    if (component.bookingForm.dirty) {
      this._snackBar.open('You have unsaved changes. Are you sure you want to leave?', 'Yes', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return false;
    }
    return component.bookingForm.pristine;
  }
}
