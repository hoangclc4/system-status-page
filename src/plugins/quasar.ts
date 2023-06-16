import {
  Quasar,
  QBtn,
  QDialog,
  QCard,
  QCardSection,
  QCardActions,
  QSeparator,
  QTab,
  QTabs,
  QTabPanels,
  QTabPanel,
  QForm,
  QInput,
  QSpinnerHourglass,
  QIcon,
  QSkeleton,
  QMenu,
  QList,
  QItem,
  QItemSection,
  QTooltip,
  
  Dialog,
  LocalStorage
} from "quasar";

export default defineNuxtPlugin((nuxtApp) => {
  const quasarUserOptions = {
    components: {
      QBtn,
      QDialog,
      QCard,
      QCardSection,
      QCardActions,
      QSeparator,
      QTab,
      QTabs,
      QTabPanels,
      QTabPanel,
      QForm,
      QInput,
      QSpinnerHourglass,
      QIcon,
      QSkeleton,
      QMenu,
      QList,
      QItem,
      QItemSection,
      QTooltip
    },
    plugins: {
      Dialog,
      LocalStorage
    },
    config: {}, 
  };
  nuxtApp.vueApp.use(Quasar, quasarUserOptions);
});
