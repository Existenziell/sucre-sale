export const htmlEmail = (name, message, topic) => {
  return (
    <div style={{ fontFamily: `'Trebuchet MS', sans-serif, 'Open Sans'` }}>
      <h1>Hello {name}</h1>
      <p>This is a confirmation, that your message to Sucré Salé has indeed been received successfully.<br />We&apos;ll come back to you as soon as possible.</p>
      <p>Thank you so much,<br />Sucré Salé</p>
      <p style={{ marginTop: '40px' }}>
        {topic && <p>Subject: {topic}</p>}
        Your message:<br />
        {message}
      </p>
    </div>
  )
}
