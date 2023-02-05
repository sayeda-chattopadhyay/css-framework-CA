import { API_SOCIAL_URL } from "../constant.mjs";

const action = "/auth/register";
const method = "post";

/** This Async function sends data of registered users to the server through api fetch method.
 *
 * @param {object} profile This is user´s required profile registered data in object form
 * @returns {object}
 * @example
 *  ```js
 * //
 * register(profile)
 * // returns {id: 441, name: 'Rony_Robinson', email: 'rony.robinson@noroff.no', banner: '', avatar: ''}
 * ```
 */

export async function register(profile) {
  try {
    const registerURL = API_SOCIAL_URL + action;

    const userToRegister = {
      headers: {
        "content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    };

    const response = await fetch(registerURL, userToRegister);
    console.log(response);

    const result = await response.json();
    console.log(result);

    alert("You are now registered");

    return result;
  } catch (error) {
    console.log(error);
  }
}
