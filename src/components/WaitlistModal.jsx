import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function WaitlistModal({ open, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const reset = () => {
    setName('')
    setEmail('')
    setSpecialty('')
    setLoading(false)
    setSuccess(false)
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.trim()) {
      setError('Preencha nome e e-mail para continuar.')
      return
    }
    try {
      setLoading(true)
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, specialty }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Erro ao enviar. Tente novamente.')
      }
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div aria-modal="true" role="dialog" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={() => { reset(); onClose() }} />
      <div className="relative w-full max-w-lg mx-auto rounded-xl border border-primary/50 bg-[#0A0A0A] p-6 shadow-[0_8px_32px_hsl(210_100%_56%_/_0.2)]">
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-2xl font-bold text-white tracking-tight">Entre para a Lista VIP</h2>
            <p className="text-muted-foreground">Preencha os dados abaixo para garantir seu acesso prioritário e desconto exclusivo no lançamento do Reprogramed em Janeiro de 2026.</p>

            {error && <div className="text-red-400 text-sm" role="alert">{error}</div>}

            <div className="space-y-1">
              <label htmlFor="name" className="text-sm text-muted-foreground">Nome completo</label>
              <input id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-input text-white placeholder:text-gray-400 border border-transparent focus:border-primary px-4 py-3 outline-none transition" placeholder="Seu nome" />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm text-muted-foreground">E-mail profissional</label>
              <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg bg-input text-white placeholder:text-gray-400 border border-transparent focus:border-primary px-4 py-3 outline-none transition" placeholder="seu@email.com" />
            </div>

            <div className="space-y-1">
              <label htmlFor="specialty" className="text-sm text-muted-foreground">Especialidade médica (opcional)</label>
              <input id="specialty" name="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)}
                className="w-full rounded-lg bg-input text-white placeholder:text-gray-400 border border-transparent focus:border-primary px-4 py-3 outline-none transition" placeholder="Ex.: Clínica Médica" />
            </div>

            <button type="submit" disabled={loading} className="w-full btn-primary">
              {loading ? 'Enviando...' : 'Garantir Minha Vaga VIP'}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-primary mx-auto" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Bem-vindo à Lista VIP!</h2>
            <div className="text-left text-muted-foreground space-y-1">
              <p>Você garantiu seu lugar! Em breve você receberá no seu e-mail:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Acesso antecipado ao conteúdo exclusivo</li>
                <li>Seu código de desconto VIP</li>
                <li>Atualizações sobre o lançamento</li>
              </ul>
              <p className="font-medium text-white">Fique de olho na sua caixa de entrada!</p>
            </div>
            <button className="w-full btn-outline" onClick={() => { reset(); onClose() }}>Fechar</button>
          </div>
        )}
      </div>
    </div>
  )
}
