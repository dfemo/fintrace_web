import { ContactForm } from '@/components/ContactForm'
import { SectionLabel } from '@/components/ui/SectionLabel'

export default function ContactPage() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Get in touch</SectionLabel>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Contact us</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted">
          Questions about FinTrace SME, partnerships, or early access? We&apos;d love to hear from you.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-ink">Early access</h2>
              <p className="mt-2 text-ink-muted">
                For launch updates, use the <strong className="text-ink">Get early access</strong> button —
                we collect emails for early bird access and will let you know the moment we go live.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-6">
              <p className="text-sm text-ink-subtle">General enquiries</p>
              <p className="mt-1 font-semibold text-primary">hello@fintrace.co.uk</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-6">
              <p className="text-sm text-ink-subtle">Based in</p>
              <p className="mt-1 font-semibold text-ink">United Kingdom</p>
              <p className="mt-1 text-sm text-ink-muted">
                Serving UK micro-businesses selling online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
