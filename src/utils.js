// we assume all language codes are 2 characters long.
// if this changes we will need to update our logic.

const languageList = ["en", "fr"];

export function getLanguageFromPathname(pathname) {
  const code = pathname.slice(1, 3);
  if (languageList.indexOf(code) === -1) {
    console.warn(`Unrecognized language code in pathname (${pathname})`);
    // fallback to English
    return "en";
  }
  return code;
}

export function replaceLanguageInPathname(pathname, code) {
  return `/${code}/${pathname.slice(4)}`;
}
