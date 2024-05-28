export async function handler(event: any, context: any) {
  console.log(`Event: ${JSON.parse(JSON.stringify(event))}`);
  console.log(`Context: ${JSON.stringify(context)}`);
  return Promise.resolve(event ?? {});  
}
