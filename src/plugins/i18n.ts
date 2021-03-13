/**
 * I18n plugin create and configure.
 */

import { LocaleMessages, createI18n, VueMessageType } from 'vue-i18n'

function loadLocaleMessages () {
  const locales = require.context(
    '@/i18n/locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i,
  )
  const messages: LocaleMessages<VueMessageType> = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })

  return messages
}

/**
 * Plugin instance create
 */
export const i18n = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
})

export const apply = ({ app }) => {
  app.use(i18n)
}

export default i18n
