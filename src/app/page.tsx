import { SITE } from "@/config/site"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">{SITE.name}</h1>
      <p className="max-w-md text-center text-muted-foreground">
        {SITE.description}
      </p>
      <Button>Get started</Button>
    </main>
  )
}
