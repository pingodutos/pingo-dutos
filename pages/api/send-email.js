import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { nome, email, telefone, mensagem } = req.body;

  if (!nome || !email || !telefone || !mensagem) {
    return res.status(400).json({ message: 'Preencha todos os campos.' });
  }

  // Configurar o transporte do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Contato Pingo Dutos <${process.env.GMAIL_USER}>`,
      to: 'pingodutos@gmail.com',
      subject: 'Novo contato pelo site',
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`,
      html: `<p><b>Nome:</b> ${nome}</p><p><b>Email:</b> ${email}</p><p><b>Telefone:</b> ${telefone}</p><p><b>Mensagem:</b><br/>${mensagem}</p>`
    });
    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao enviar email.', error: error.message });
  }
} 