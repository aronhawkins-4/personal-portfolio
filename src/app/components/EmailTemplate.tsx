interface EmailTemplateProps {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  company,
  message,
}) => (
  <div>
    <h1>{name} submitted a contact form on aronhawkins.com</h1>
    <p>Company: {company}</p>
    <p>Message: {message}</p>
  </div>
);
