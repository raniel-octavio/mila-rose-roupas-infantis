import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.ORCAMENTO_EMAIL
    ) {
      throw new Error(
        "Variáveis EMAIL_USER, EMAIL_PASS ou ORCAMENTO_EMAIL não configuradas."
      );
    }

    const formData = await req.formData();

    const nome = formData.get("nome")?.toString() || "";
    const telefone = formData.get("telefone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const cidade = formData.get("cidade")?.toString() || "";

    const evento = formData.get("evento")?.toString() || "";
    const dataEvento = formData.get("dataEvento")?.toString() || "";

    const modelo = formData.get("modelo")?.toString() || "";
    const cor = formData.get("cor")?.toString() || "";
    const tecido = formData.get("tecido")?.toString() || "";
    const estilo = formData.get("estilo")?.toString() || "";

    const altura = formData.get("altura")?.toString() || "";
    const busto = formData.get("busto")?.toString() || "";
    const cintura = formData.get("cintura")?.toString() || "";
    const quadril = formData.get("quadril")?.toString() || "";
    const ombro = formData.get("ombro")?.toString() || "";
    const comprimento = formData.get("comprimento")?.toString() || "";

    const observacoes = formData.get("observacoes")?.toString() || "";

    const imagens = formData.getAll("imagens") as File[];

    console.log("Fotos recebidas:", imagens.length);

    const attachments = await Promise.all(
      imagens
        .filter(
          (file) =>
            file &&
            typeof file.arrayBuffer === "function" &&
            file.size > 0
        )
        .map(async (file, index) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
          contentType: file.type,
          cid: `imagem${index}`,
        }))
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ORCAMENTO_EMAIL,
      subject: `🌷 Novo orçamento - ${nome}`,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:800px;margin:auto">
          
          <h1 style="color:#d65d7a">
            Novo Pedido de Orçamento
          </h1>

          <hr />

          <h2>👤 Dados da Cliente</h2>

          <p><b>Nome:</b> ${nome}</p>
          <p><b>WhatsApp:</b> ${telefone}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Cidade:</b> ${cidade}</p>

          <hr />

          <h2>🎉 Evento</h2>

          <p><b>Tipo:</b> ${evento}</p>
          <p><b>Data:</b> ${dataEvento}</p>

          <hr />

          <h2>👗 Detalhes do Vestido</h2>

          <p><b>Modelo:</b> ${modelo}</p>
          <p><b>Cor:</b> ${cor}</p>
          <p><b>Tecido:</b> ${tecido}</p>
          <p><b>Estilo:</b> ${estilo}</p>

          <hr />

          <h2>📏 Medidas</h2>

          <p><b>Altura:</b> ${altura}</p>
          <p><b>Busto:</b> ${busto}</p>
          <p><b>Cintura:</b> ${cintura}</p>
          <p><b>Quadril:</b> ${quadril}</p>
          <p><b>Ombro:</b> ${ombro}</p>
          <p><b>Comprimento:</b> ${comprimento}</p>

          <hr />

          <h2>📝 Observações</h2>

          <p>${observacoes || "Nenhuma observação informada."}</p>

          ${
            attachments.length > 0
              ? `
                <hr />

                <h2>📸 Fotos de Referência</h2>

                ${attachments
                  .map(
                    (_, index) => `
                    <div style="margin-bottom:20px">
                      <img
                        src="cid:imagem${index}"
                        style="
                          max-width:350px;
                          border-radius:12px;
                          border:1px solid #ddd;
                        "
                      />
                    </div>
                  `
                  )
                  .join("")}
              `
              : `
                <hr />
                <p><b>Nenhuma foto enviada.</b></p>
              `
          }
        </div>
      `,

      attachments,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erro ao enviar orçamento:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar orçamento.",
      },
      {
        status: 500,
      }
    );
  }
}