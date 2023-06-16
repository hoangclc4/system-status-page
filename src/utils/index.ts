export const popupCenter = ({
  url,
  title,
  w,
  h,
}: {
  url: URL;
  title: string;
  w: number;
  h: number;
}) => {
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    `
    scrollbars=yes,
    width=${w / systemZoom},
    height=${h / systemZoom},
    top=${top},
    left=${left}
    `
  );

  return newWindow;
};

export const detectInstalledChromeExtension = (chromeExtensionId: string, callback: Function) => {
  const prefix = "chrome-extension://"
  const chromeExtensionIconPath = "/icons/icon-16x16.png"
  const img = new Image();
  img.src = prefix + chromeExtensionId + chromeExtensionIconPath;
  img.onload = function (res) {
    callback(true)
  };
  img.onerror = function (error) {
    callback(false)
  };

}