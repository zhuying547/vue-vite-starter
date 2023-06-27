export async function getFakeCaptcha(
  params: { phone?: string },
  options?: { [key: string]: any }
) {
  return fetch('/api/login/captcha', {
    method: 'GET',
  })
}
