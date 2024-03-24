import { mailOptions, transporter } from "@/components/contact/config/nodemailer";

export async function POST(req) {

  if (req.method === 'POST') {

    const data = await req.json();

    try {

      await transporter.sendMail({
        ...mailOptions,
        subject: `Message de ${data.prenom} ${data.nom}`,
        text: "",
        html: `<p>Prénom : ${data.prenom}</p><p>Nom : ${data.nom}</p><p>Email : ${data.email}</p><p>Message :</p><p>${data.message}</p>`
      });

      return Response.json({success: true});

    } catch (error) {
      
      return new Error(error.message);

    }
  }
  return new Error('Bad request');

}