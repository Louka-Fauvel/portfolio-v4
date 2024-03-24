import {diplomes} from "@/components/data/data";

export async function GET() {
  return Response.json(diplomes);
}
