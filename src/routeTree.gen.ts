/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as BillsIndexImport } from './routes/bills/index'
import { Route as AppointmentsIndexImport } from './routes/appointments/index'
import { Route as BillsNewIndexImport } from './routes/bills/new/index'
import { Route as BillsEditIndexImport } from './routes/bills/edit/index'
import { Route as AuthSignUpIndexImport } from './routes/auth/sign-up/index'
import { Route as AuthLoginIndexImport } from './routes/auth/login/index'
import { Route as AuthEmailLoginIndexImport } from './routes/auth/email-login/index'
import { Route as AppointmentsNewIndexImport } from './routes/appointments/new/index'
import { Route as BillsEditIdIndexImport } from './routes/bills/edit/$id/index'
import { Route as AppointmentsEditIdIndexImport } from './routes/appointments/edit/$id/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BillsIndexRoute = BillsIndexImport.update({
  path: '/bills/',
  getParentRoute: () => rootRoute,
} as any)

const AppointmentsIndexRoute = AppointmentsIndexImport.update({
  path: '/appointments/',
  getParentRoute: () => rootRoute,
} as any)

const BillsNewIndexRoute = BillsNewIndexImport.update({
  path: '/bills/new/',
  getParentRoute: () => rootRoute,
} as any)

const BillsEditIndexRoute = BillsEditIndexImport.update({
  path: '/bills/edit/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignUpIndexRoute = AuthSignUpIndexImport.update({
  path: '/auth/sign-up/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginIndexRoute = AuthLoginIndexImport.update({
  path: '/auth/login/',
  getParentRoute: () => rootRoute,
} as any)

const AuthEmailLoginIndexRoute = AuthEmailLoginIndexImport.update({
  path: '/auth/email-login/',
  getParentRoute: () => rootRoute,
} as any)

const AppointmentsNewIndexRoute = AppointmentsNewIndexImport.update({
  path: '/appointments/new/',
  getParentRoute: () => rootRoute,
} as any)

const BillsEditIdIndexRoute = BillsEditIdIndexImport.update({
  path: '/bills/edit/$id/',
  getParentRoute: () => rootRoute,
} as any)

const AppointmentsEditIdIndexRoute = AppointmentsEditIdIndexImport.update({
  path: '/appointments/edit/$id/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/appointments/': {
      id: '/appointments/'
      path: '/appointments'
      fullPath: '/appointments'
      preLoaderRoute: typeof AppointmentsIndexImport
      parentRoute: typeof rootRoute
    }
    '/bills/': {
      id: '/bills/'
      path: '/bills'
      fullPath: '/bills'
      preLoaderRoute: typeof BillsIndexImport
      parentRoute: typeof rootRoute
    }
    '/appointments/new/': {
      id: '/appointments/new/'
      path: '/appointments/new'
      fullPath: '/appointments/new'
      preLoaderRoute: typeof AppointmentsNewIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/email-login/': {
      id: '/auth/email-login/'
      path: '/auth/email-login'
      fullPath: '/auth/email-login'
      preLoaderRoute: typeof AuthEmailLoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/login/': {
      id: '/auth/login/'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-up/': {
      id: '/auth/sign-up/'
      path: '/auth/sign-up'
      fullPath: '/auth/sign-up'
      preLoaderRoute: typeof AuthSignUpIndexImport
      parentRoute: typeof rootRoute
    }
    '/bills/edit/': {
      id: '/bills/edit/'
      path: '/bills/edit'
      fullPath: '/bills/edit'
      preLoaderRoute: typeof BillsEditIndexImport
      parentRoute: typeof rootRoute
    }
    '/bills/new/': {
      id: '/bills/new/'
      path: '/bills/new'
      fullPath: '/bills/new'
      preLoaderRoute: typeof BillsNewIndexImport
      parentRoute: typeof rootRoute
    }
    '/appointments/edit/$id/': {
      id: '/appointments/edit/$id/'
      path: '/appointments/edit/$id'
      fullPath: '/appointments/edit/$id'
      preLoaderRoute: typeof AppointmentsEditIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/bills/edit/$id/': {
      id: '/bills/edit/$id/'
      path: '/bills/edit/$id'
      fullPath: '/bills/edit/$id'
      preLoaderRoute: typeof BillsEditIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/appointments': typeof AppointmentsIndexRoute
  '/bills': typeof BillsIndexRoute
  '/appointments/new': typeof AppointmentsNewIndexRoute
  '/auth/email-login': typeof AuthEmailLoginIndexRoute
  '/auth/login': typeof AuthLoginIndexRoute
  '/auth/sign-up': typeof AuthSignUpIndexRoute
  '/bills/edit': typeof BillsEditIndexRoute
  '/bills/new': typeof BillsNewIndexRoute
  '/appointments/edit/$id': typeof AppointmentsEditIdIndexRoute
  '/bills/edit/$id': typeof BillsEditIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/appointments': typeof AppointmentsIndexRoute
  '/bills': typeof BillsIndexRoute
  '/appointments/new': typeof AppointmentsNewIndexRoute
  '/auth/email-login': typeof AuthEmailLoginIndexRoute
  '/auth/login': typeof AuthLoginIndexRoute
  '/auth/sign-up': typeof AuthSignUpIndexRoute
  '/bills/edit': typeof BillsEditIndexRoute
  '/bills/new': typeof BillsNewIndexRoute
  '/appointments/edit/$id': typeof AppointmentsEditIdIndexRoute
  '/bills/edit/$id': typeof BillsEditIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/appointments/': typeof AppointmentsIndexRoute
  '/bills/': typeof BillsIndexRoute
  '/appointments/new/': typeof AppointmentsNewIndexRoute
  '/auth/email-login/': typeof AuthEmailLoginIndexRoute
  '/auth/login/': typeof AuthLoginIndexRoute
  '/auth/sign-up/': typeof AuthSignUpIndexRoute
  '/bills/edit/': typeof BillsEditIndexRoute
  '/bills/new/': typeof BillsNewIndexRoute
  '/appointments/edit/$id/': typeof AppointmentsEditIdIndexRoute
  '/bills/edit/$id/': typeof BillsEditIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/appointments'
    | '/bills'
    | '/appointments/new'
    | '/auth/email-login'
    | '/auth/login'
    | '/auth/sign-up'
    | '/bills/edit'
    | '/bills/new'
    | '/appointments/edit/$id'
    | '/bills/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/appointments'
    | '/bills'
    | '/appointments/new'
    | '/auth/email-login'
    | '/auth/login'
    | '/auth/sign-up'
    | '/bills/edit'
    | '/bills/new'
    | '/appointments/edit/$id'
    | '/bills/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/appointments/'
    | '/bills/'
    | '/appointments/new/'
    | '/auth/email-login/'
    | '/auth/login/'
    | '/auth/sign-up/'
    | '/bills/edit/'
    | '/bills/new/'
    | '/appointments/edit/$id/'
    | '/bills/edit/$id/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppointmentsIndexRoute: typeof AppointmentsIndexRoute
  BillsIndexRoute: typeof BillsIndexRoute
  AppointmentsNewIndexRoute: typeof AppointmentsNewIndexRoute
  AuthEmailLoginIndexRoute: typeof AuthEmailLoginIndexRoute
  AuthLoginIndexRoute: typeof AuthLoginIndexRoute
  AuthSignUpIndexRoute: typeof AuthSignUpIndexRoute
  BillsEditIndexRoute: typeof BillsEditIndexRoute
  BillsNewIndexRoute: typeof BillsNewIndexRoute
  AppointmentsEditIdIndexRoute: typeof AppointmentsEditIdIndexRoute
  BillsEditIdIndexRoute: typeof BillsEditIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppointmentsIndexRoute: AppointmentsIndexRoute,
  BillsIndexRoute: BillsIndexRoute,
  AppointmentsNewIndexRoute: AppointmentsNewIndexRoute,
  AuthEmailLoginIndexRoute: AuthEmailLoginIndexRoute,
  AuthLoginIndexRoute: AuthLoginIndexRoute,
  AuthSignUpIndexRoute: AuthSignUpIndexRoute,
  BillsEditIndexRoute: BillsEditIndexRoute,
  BillsNewIndexRoute: BillsNewIndexRoute,
  AppointmentsEditIdIndexRoute: AppointmentsEditIdIndexRoute,
  BillsEditIdIndexRoute: BillsEditIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/appointments/",
        "/bills/",
        "/appointments/new/",
        "/auth/email-login/",
        "/auth/login/",
        "/auth/sign-up/",
        "/bills/edit/",
        "/bills/new/",
        "/appointments/edit/$id/",
        "/bills/edit/$id/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/appointments/": {
      "filePath": "appointments/index.tsx"
    },
    "/bills/": {
      "filePath": "bills/index.tsx"
    },
    "/appointments/new/": {
      "filePath": "appointments/new/index.tsx"
    },
    "/auth/email-login/": {
      "filePath": "auth/email-login/index.tsx"
    },
    "/auth/login/": {
      "filePath": "auth/login/index.tsx"
    },
    "/auth/sign-up/": {
      "filePath": "auth/sign-up/index.tsx"
    },
    "/bills/edit/": {
      "filePath": "bills/edit/index.tsx"
    },
    "/bills/new/": {
      "filePath": "bills/new/index.tsx"
    },
    "/appointments/edit/$id/": {
      "filePath": "appointments/edit/$id/index.tsx"
    },
    "/bills/edit/$id/": {
      "filePath": "bills/edit/$id/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
