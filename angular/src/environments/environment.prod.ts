import { Environment } from '@abp/ng.core';

const baseUrl = 'http://ancheta.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://anchetabookstore.azurewebsites.net',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://anchetabookstore.azurewebsites.net',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
