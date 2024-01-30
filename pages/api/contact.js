import {mailOptions, transporter} from "@/config/nodemailer";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Message de ${data.prenom} ${data.nom}`,
        text: "",
        html: `<p>Prénom : ${data.prenom}</p><p>Nom : ${data.nom}</p><p>Email : ${data.email}</p><p>Message :</p><p>${data.message}</p>`
      });
      return res.status(200).json({success: true});
    } catch (error) {
      console.log(error);
      return res.status(400).json({message: error.message});
    }
  }
  return res.status(400).json({message: 'Bad request'});
}
