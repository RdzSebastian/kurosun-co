import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      Oxygen?.env?.PUBLIC_STORE_DOMAIN || 'kurosun.co',
    storefrontToken:
      Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN ||
      '81a6e13836932ac506dfd38fa55b41fb',
    privateStorefrontToken:
      Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});

