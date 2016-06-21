export async function sendContact (payload) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(payload);
    }, 3 * 1000);
  });
}
