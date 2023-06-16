import { detectInstalledChromeExtension } from '@utils/index'
import { INJECTION_KEY } from '@constants/injection-key'

export const initIndexPage = () => {
  const config = useRuntimeConfig()

  const isCSSSelectorExt = ref<boolean>(false)
  const updateIsCSSSelectorExt = (value: boolean) => {
    isCSSSelectorExt.value = value
  }

  onMounted(() => {
    const { cssSelectorExtId } = config.public;
    detectInstalledChromeExtension(cssSelectorExtId, updateIsCSSSelectorExt);
  });

  // Provides
  provide(INJECTION_KEY.IS_CSS_SELECTOR_EXT, isCSSSelectorExt.value)

  return { isCSSSelectorExt }
}

export const useIndexPage = (): { isCSSSelectorExt: boolean } => ({
  isCSSSelectorExt: inject(INJECTION_KEY.IS_CSS_SELECTOR_EXT, false)
}) 