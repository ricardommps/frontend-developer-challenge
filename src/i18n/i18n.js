import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      'pt-BR': {
        translation: {
          FOOTER_SECTION1: 'Testando suas habilidades em HTML, CSS e JS.',
          FOOTER_SECTION2: 'Linx Impulse',
          FOOTER_SECTION3: '2019',
          HEADER_SECTION1: 'uma seleção de produtos',
          HEADER_SECTION2: 'especial para você',
          HEADER_SECTION3: 'Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!',
          HEADER_BUTTON1: 'Conheça a Linx',
          HEADER_BUTTON2: 'Ajude o algorítimo',
          HEADER_BUTTON3: 'Seus produtos',
          HEADER_BUTTON4: 'Compartilhe',
          BUTTON_BUY: 'Comprar',
          FROM: 'De:',
          BY: 'Por:',
          OR: 'ou',
          CURRENCY: 'R$',
        },
      },
    },
    fallbackLng: 'pt-BR',
    debug: false,
    interpolation: { escapeValue: false },
    react: { wait: true },
  });

export default i18n;
