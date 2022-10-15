import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      // @ts-ignore
      'kapengmatapangtest.myshopify.com',
    storefrontToken:
      // @ts-ignore
      '1666ad3f550daaf9bbcd77d09540a967',
    privateStorefrontToken:
      // @ts-ignore
      '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',
    storefrontApiVersion: '2022-07',
    // @ts-ignore
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
