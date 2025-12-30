function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS Configuration - Replace with your actual IDs
      const SERVICE_ID = 'service_ijl5iq8';
      const TEMPLATE_ID = 'template_og2kuj3';
      const PUBLIC_KEY = 'rYOAg5ldJM2zTUIis';

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          }
        })
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  try {
    return (
      <section id="contact" className="section-padding bg-[var(--bg-white)]" data-name="contact" data-file="components/Contact.js">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-[var(--bg-white)] p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] bg-[var(--bg-light)] text-[var(--text-primary)]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] bg-[var(--bg-light)] text-[var(--text-primary)]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--text-primary)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] resize-none bg-[var(--bg-light)] text-[var(--text-primary)]"
                ></textarea>
              </div>

              {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="mt-4 text-sm text-[var(--text-secondary)] text-center hidden">
                Update EmailJS credentials in <code className="bg-[var(--bg-light)] px-2 py-1 rounded">components/Contact.js</code>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}