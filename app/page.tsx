import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <main className="w-full flex flex-col justify-center items-center bg-red-400 space-y-6">
          <h1>This is Homepage</h1>
          <Button>
              <Link href={"/dashboard"}>Go to Dashboard</Link>
          </Button>
      </main>
  )
}
