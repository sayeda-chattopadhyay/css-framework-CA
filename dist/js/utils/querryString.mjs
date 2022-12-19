export function getParamFromQueryString(paramName) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const param = params.get(paramName);
  return param;
}
