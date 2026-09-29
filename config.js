/**
 * Configurações do Poster A4 - QR Code
 * 
 * Edite os valores abaixo para alterar o conteúdo do cartaz
 * sem precisar mexer no HTML.
 */
const posterConfig = {

  // ── Cabeçalho ──────────────────────────────────────────────
  header: {
    title: "Centro Integrado de Perícia Técnico-Científica do ES",
    logoGov: {
      src: "./assets/Brasao_Governo_500.png",
      alt: "Brasão Governo do Espírito Santo",
      title: "Governo do Espírito Santo",
    },
    logoPartner: {
      src: "./assets/logo-geribello-white-h-1.png",
      alt: "Geribello Engenharia",
      title: "Geribello Engenharia",
    },
  },

  // ── Conteúdo Principal ─────────────────────────────────────
  main: {
    heading: "Acesse o Tour Virtual 360º",
    callToAction: "Abra a câmera e aponte para o código",
    callToActionEmoji: "📸",
  },

  // ── QR Code ────────────────────────────────────────────────
  qrCode: {
    /** URL que o QR Code deve apontar */
    targetUrl:
      "https://www.banibconecta.com/site/tour/202466/geribello-engenharia-ltda/implantacao-28-09-2026/autostart",
    /** Tamanho do QR Code em pixels (largura x altura) */
    size: 350,
    /** API usada para gerar o QR Code (não precisa alterar) */
    apiBase: "https://api.qrserver.com/v1/create-qr-code/",
  },

  // ── Rodapé ─────────────────────────────────────────────────
  footer: {
    updateDate: "28 de Setembro de 2026",
  },
};
