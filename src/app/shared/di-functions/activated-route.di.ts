import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function getRouteParam(key: string) {
  return inject(ActivatedRoute).snapshot.params[key];
}
