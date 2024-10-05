import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ru', 'uz' , 'en'],
 
  // Used when no locale matches
  defaultLocale: 'ru'
});
 

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);