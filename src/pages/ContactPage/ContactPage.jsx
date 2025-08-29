import { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

console.log({
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});


const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", msg: "" });

    try {
        await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current
        );


      setStatus({ type: "success", msg: "Message sent! I’ll get back to you soon." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ type: "danger", msg: "Failed to send. Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <Container className="py-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Contact Me</h2>

      {status.msg && <Alert variant={status.type}>{status.msg}</Alert>}

        <Form ref={formRef} onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="from_name" type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="reply_to" type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control name="subject" type="text" placeholder="Subject" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={4} placeholder="Write your message..." required />
            </Form.Group>

            <input type="hidden" name="time" value={new Date().toLocaleString()} />


            <div className="text-center">
                <Button variant="primary" type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Send Message"}
                </Button>
            </div>
        </Form>
    </Container>
  );
};

export default ContactPage;
