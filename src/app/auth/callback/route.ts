import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const error_description = searchParams.get("error_description");

  if (error) {
    console.error("Auth error:", error, error_description);
    const redirectTo = new URL("/login", origin);
    redirectTo.searchParams.set("error", encodeURIComponent(error_description || error));
    return NextResponse.redirect(redirectTo);
  }
  if (code) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return []; },
          setAll(cookiesToSet: { name: string; value: string; options: any }[]) {
            cookiesToSet.forEach(({ name, value, options: cookieOptions }) => {
              const response = NextResponse.redirect(new URL("/", origin));
              response.cookies.set(name, value, cookieOptions);
            });
          },
        },
      }
    );
    const { error: authError } = await supabase.auth.exchangeCodeForSession(code);
    if (authError) {
      console.error("Code exchange error:", authError);
      const redirectTo = new URL("/login", origin);
      redirectTo.searchParams.set("error", encodeURIComponent(authError.message));
      return NextResponse.redirect(redirectTo);
    }
    return NextResponse.redirect(new URL("/dashboard", origin));
  }
  return NextResponse.redirect(new URL("/login", origin));
}
