export function setCookie(name: string, val: string) {
  const date = new Date();
  const value = val;

  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie =
    name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}

export interface ICookieUser {
  id: string;
  email: string;
  name: string;
  no_tlp: string;
  role: string;
  no_unit: number;
  accessToken: string;
  refreshToken: string;
}
export function getCookie(name: string) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");

  if (parts.length === 2) {
    const json = parts.pop()?.split(";").shift()?.toString();

    //const dataCookie = parts.pop()?.split(";").shift();
    // var json = JSON.parse(value);
    // console.log(json);

    let jsonResult = JSON.parse(json!.toString());
    return {
      id: jsonResult.id,
      email: jsonResult.email,
      name: jsonResult.name,
      no_tlp: jsonResult.no_telp,
      role: jsonResult.role,
      no_unit: jsonResult.no_unit,
      accessToken: jsonResult.accessToken,
      refreshToken: jsonResult.refreshToken,
    };
    // return JSON.parse(json!.toString());
  }
}

export function deleteCookie(name: string) {
  const date = new Date();

  // Set it expire in -1 days
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
}
export default {
  setCookie,
  getCookie,
  deleteCookie,
};
