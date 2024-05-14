import { mailOptions, transporter } from "@/components/contact/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {

  if (req.method === 'POST') {


    try {
      const data = await req.json();

      await transporter.sendMail({
        ...mailOptions,
        subject: `Message de ${data.prenom} ${data.nom}`,
        text: "",
        html: `<p>Prénom : ${data.prenom}</p><p>Nom : ${data.nom}</p><p>Email : ${data.email}</p><p>Message :</p><p>${data.message}</p>`
      });

      return Response.json({success: true});

    } catch (error) {
      
      return NextResponse.json({ error: error.message }, { status: 400 });

    }
  }
  return new Error('Bad request');

}