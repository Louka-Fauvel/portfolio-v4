import {hacktoberfests} from "@/components/data/data";

export async function GET() {
  return Response.json(hacktoberfests);
}
