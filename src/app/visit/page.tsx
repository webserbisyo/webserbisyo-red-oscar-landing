import { redirect } from "next/navigation";

// The Visit section now lives on the home page at /#visit
// Redirect anyone landing on /visit there directly
export default function VisitPage() {
  redirect("/#visit");
}
