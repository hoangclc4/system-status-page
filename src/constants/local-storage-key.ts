const localStorageKey: any = {
  DONT_ASK_AGAIN_PICK_UP_CONTENT: 'DONT_ASK_AGAIN_PICK_UP_CONTENT'
}

const interceptorHandler = (prefix = 'ragt_demo') => {
  return Object.keys(localStorageKey).reduce((res: any, key: string) => ({
    ...res, [key]: `${prefix}_${localStorageKey[key]}`}
  ), {} as any)
}

export default {
  ...interceptorHandler()
}