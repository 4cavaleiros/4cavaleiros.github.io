process.env.NODE_ENV = 'development'
process.env.BABEL_ENV = 'development'

const manageTranslations = require('react-intl-translations-manager').default

manageTranslations({
  messagesDirectory: '.i18n',
  translationsDirectory: './src/assets/locales',
  languages: ['pt', 'en'],
})
