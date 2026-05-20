import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="font-display text-4xl font-semibold text-white">Contact us</h1>
      <p className="mt-4 text-slate-400">
        Questions about FinTrace SME, partnerships, or early access? We&apos;d love to hear from you.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-white">Get in touch</h2>
            <p className="mt-2 text-slate-400">
              For launch updates, use the <strong className="text-slate-300">Notify me</strong> button — we
              collect emails for early bird access and will let you know the moment we go live.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-500">General enquiries</p>
            <p className="mt-1 font-medium text-accent-400">hello@fintrace.co.uk</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-500">Based in</p>
            <p className="mt-1 font-medium text-white">United Kingdom</p>
            <p className="mt-1 text-sm text-slate-400">Serving UK micro-businesses selling online</p>
          </div>
        </div>
      </div>
    </div>
  )
}
