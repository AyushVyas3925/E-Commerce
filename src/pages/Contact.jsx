import React from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

function Contact() {
    return (
        <div className="fade-in" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "10px",
                    background: "var(--subheading-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    Contact Us
                </h1>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>We'd love to hear from you. Please fill out this form.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>

                {/* Contact Info */}
                <div style={{
                    background: "var(--bg-card)",
                    padding: "30px",
                    borderRadius: "20px",
                    border: "1px solid var(--border-card)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <h2 style={{ fontSize: "1.5rem", marginTop: 0, color: "var(--text-primary)" }}>Get in Touch</h2>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "var(--text-secondary)" }}>
                        <Mail color="var(--accent)" />
                        <span>support@shopzone.com</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "var(--text-secondary)" }}>
                        <Phone color="var(--accent)" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px", color: "var(--text-secondary)" }}>
                        <MapPin color="var(--accent)" />
                        <span>123 Commerce St, Tech City</span>
                    </div>
                </div>

                {/* Form */}
                <div style={{
                    background: "var(--bg-card)",
                    padding: "30px",
                    borderRadius: "20px",
                    border: "1px solid var(--border-card)",
                }}>
                    <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", marginBottom: "8px", color: "var(--text-secondary)" }}>Name</label>
                            <input type="text" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", boxSizing: "border-box", outline: "none" }} required placeholder="John Doe" />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", marginBottom: "8px", color: "var(--text-secondary)" }}>Email</label>
                            <input type="email" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", boxSizing: "border-box", outline: "none" }} required placeholder="john@example.com" />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ display: "block", marginBottom: "8px", color: "var(--text-secondary)" }}>Message</label>
                            <textarea rows="4" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", boxSizing: "border-box", resize: "vertical", outline: "none" }} required placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%" }}>
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
