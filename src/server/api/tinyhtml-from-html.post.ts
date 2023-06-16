export default defineEventHandler(async (event) => {
  try {
    let body = await readBody(event);
    body = JSON.parse(Buffer.from(body, 'base64').toString('utf8'));
    if (body?.html) {
    }
    return '';
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
});
