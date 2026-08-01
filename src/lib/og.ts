/**
 * Umumiy Open Graph rasmi.
 *
 * Next.js metadata obyektlari sayoz (shallow) birlashadi: sahifa o'z
 * `openGraph` blokini e'lon qilsa, layout'dagi butun `openGraph` bekor
 * bo'ladi. Ildizdagi `opengraph-image.tsx` fayl-konventsiyasi esa
 * `[lang]` marshrutlariga qo'llanmagan — natijada sayt bo'ylab og:image
 * umuman chiqmayotgan edi.
 *
 * Shu sabab rasm shu yerda bir marta e'lon qilinadi va har bir
 * `openGraph` blokiga BIRINCHI bo'lib spread qilinadi. Obyektda faqat
 * `images` bor — boshqa hech qanday maydonga ta'sir qilmaydi.
 */
export const ogImages = {
  images: [
    {
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: "Uzgets — Telegram Premium va Stars O'zbekistonda",
    },
  ],
}
