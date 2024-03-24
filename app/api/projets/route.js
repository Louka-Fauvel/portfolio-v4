import {projets} from "@/components/data/data";

export async function GET() {
  return Response.json(projets);
}
