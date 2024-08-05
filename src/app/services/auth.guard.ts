import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const _router=inject(Router)

  let islogin = localStorage.getItem("username") 
  console.log(!islogin);
  if(!islogin)
  {
    alert("please login ")
    _router.navigate(["login"])
    // return false 
  }
  return true;
};
