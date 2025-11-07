import open from 'open';

export async function openSwagger(port: number): Promise<void> {
  const url = `http://localhost:${port}/api`;
  console.log(`🚀 Swagger running at ${url}`);
  try {
    await open(url);
  } catch (error) {
    console.warn('⚠️ Could not open browser automatically:', error);
  }
}