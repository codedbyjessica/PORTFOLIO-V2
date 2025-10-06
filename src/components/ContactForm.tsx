'use client'
import { useState } from 'react'

export default function ContactForm({ className }: { className?: string }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        try {
            const response = await fetch('https://formspree.io/f/xeorkwgj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className={`w-full ${className}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-mainColorDark focus:outline-none focus:ring-2 focus:ring-secondaryColorDark"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-mainColorDark focus:outline-none focus:ring-2 focus:ring-secondaryColorDark"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-mainColorDark focus:outline-none focus:ring-2 focus:ring-secondaryColorDark resize-none"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="button disabled:opacity-50"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>

            {submitStatus === 'success' && (
                <p className="mt-4 text-center text-green-600">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
                <p className="mt-4 text-center text-red-600">Failed to send message. Please try again.</p>
            )}
        </div>
    )
}
