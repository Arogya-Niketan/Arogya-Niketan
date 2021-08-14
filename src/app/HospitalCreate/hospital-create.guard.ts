import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { HospitalCreateComponent } from './hospital-create/hospital-create.component';

@Injectable({
  providedIn: 'root'
})
export class HospitalCreateGuard implements CanDeactivate<HospitalCreateComponent> {
  canDeactivate(component: HospitalCreateComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.hospitalForm.dirty) {
      const hospitalName = component.hospitalForm.get('hospitalName').value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${hospitalName}?`);
    }
    return true;
  }
}