declare global {
  var openNextVersion: string
}

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  return Response.json({
    version: globalThis.openNextVersion ?? "NOT AVAILABLE",
  })
}