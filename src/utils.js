import assert from "assert";

// we assume all language codes are 2 characters long.
// if this changes we will need to update our logic.

const languageList = ["en", "fr"];

export function getLanguageFromPathname(pathname) {
  const code = pathname.slice(1, 3);
  assert(languageList.indexOf(code) !== -1);
  return code;
}

export function replaceLanguageInPathname(pathname, code) {
  return `/${code}/${pathname.slice(4)}`;
}
