import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router)
  let islogin = localStorage.getItem("username") 
  console.log(!islogin);
  if(!islogin)
  {
    Swal.fire('please login ',  '' ,'info');
    return false 
  }

  return true;
};
