async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from sai' }),
  };
}

export const handler = hello;


