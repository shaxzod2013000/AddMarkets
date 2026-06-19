import {
  Hero,
  TariffBlock,
  RequestForm,
  SocialFollow,
  ServicesGrid,
} from '../components/Sections.jsx'

// ═══════════════════════════════════════════════════════════════
// RASMLAR — shu yerdan boshqaring
// Yangi rasm qo'shish uchun:
//   1) Rasmni src/assets/ papkasiga qo'ying
//   2) Quyida import qiling (namuna ko'ring)
//   3) images={[rasm1, rasm2, rasm3]} ga qo'shing
// ═══════════════════════════════════════════════════════════════

// 190 ₽ kartochka rasmlari:
import img190_1 from '../assets/Rectangle 480.png'
import img190_2 from '../assets/Rectangle 478.png'
import img190_3 from '../assets/Rectangle 479.png'

// 250 ₽ kartochka rasmlari: (hozircha yo'q)
// import img250_1 from '../assets/...'
// import img250_2 from '../assets/...'
// import img250_3 from '../assets/...'

// 290 ₽ kartochka rasmlari:
import img290_1 from '../assets/Rectangle 480 (2).png'
import img290_2 from '../assets/Rectangle 478 (1).png'
import img290_3 from '../assets/Rectangle 479 (1).png'

// 500 ₽ kartochka rasmlari: (hozircha yo'q)
// import img500_1 from '../assets/...'
// import img500_2 from '../assets/...'
// import img500_3 from '../assets/...'

// ═══════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════
// XIZMATLAR IKONKALARI — shu yerdan boshqaring
// ═══════════════════════════════════════════════════════════════
import iconFoto360      from '../assets/Фото 360.png'
import iconCamera       from '../assets/camera.png'
import iconMannequin    from '../assets/Фото на невидимом  манекене.png'
import iconRaskladka    from '../assets/Group 409.png'
import iconDesign       from '../assets/design card.png'
import iconVideo        from '../assets/Group 366.png'
import iconSeo          from '../assets/Текст + SEO.png'
import iconImidge       from '../assets/image photo.png'
// ═══════════════════════════════════════════════════════════════

const services = [
  { label: 'Фото 360',                              icon: iconFoto360   },
  { label: 'Предметная фотосъёмка',                 icon: iconCamera    },
  { label: 'Фото на невидимом манекене',            icon: iconMannequin },
  { label: 'Фотосъёмка в раскладку',               icon: iconRaskladka },
  { label: 'Дизайн карточек товар и инфографика',  icon: iconDesign    },
  { label: 'Видео',                                 icon: iconVideo     },
  { label: 'Текст + SEO',                           icon: iconSeo       },
  { label: 'Имиджевая фотосъёмка',                 icon: iconImidge    },
]

function Main() {
  return (
    <>
      <Hero
        title="Фотосъёмка на моделях"
        bullets={[
          'Обычно фото с моделью является обложкой карточки товара',
          'Это первый контакт с Вашим продуктом и он должен возбуждать и вызывать сильное желание приобрести данную продукцию.',
          'Фото на моделях позволяет покупателю гораздо четче представить продукт на человеке и в реальной жизни.',
        ]}
      />

      <h2 className="mx-auto max-w-7xl px-4 pt-12 text-center text-2xl font-bold text-sky-600 sm:px-6 lg:px-8">
        Тарифы
      </h2>

      {/* ── 190 ₽ ─────────────────────────────────────────────── */}
      <TariffBlock
        title="Сборная фотосъёмка на моделях"
        description="В стоимость включено: Fashion-фотограф, профессиональная модель, визажист, фотостудия, постобработка и ретушь фото, глажка вещей паром"
        price={190}
        images={[img190_1, img190_2, img190_3]}
      />

      {/* ── 250 ₽ — rasm qo'shish uchun yuqorida import qiling ── */}
      <TariffBlock
        title="Фотосъёмка белья, купальников на моделях"
        description="В стоимость включено: Fashion-фотограф, профессиональная модель, визажист, фотостудия, постобработка и ретушь фото, глажка вещей паром"
        price={250}
        images={[]}
      />

      {/* ── 290 ₽ ─────────────────────────────────────────────── */}
      <TariffBlock
        title="Индивидуальная фотосъёмка на моделях"
        description="В стоимость включено: Fashion-фотограф, профессиональная модель, визажист, фотостудия, постобработка и ретушь фото, глажка вещей паром, возможность выбора фона / локации / реквизита, учитываются пожелания заказчика"
        price={290}
        images={[img290_1, img290_2, img290_3]}
      />

      {/* ── 500 ₽ — rasm qo'shish uchun yuqorida import qiling ── */}
      <TariffBlock
        title="Имиджевая фотосъёмка"
        description="В стоимость включено: продюсер, Fashion-фотограф, профессиональная модель, стилист, визажист, уникальные композиции и ракурсы, фотостудия с интерьером, постобработка и ретушь фото, глажка вещей паром"
        price={500}
        images={[]}
      />

      <RequestForm />
      <SocialFollow />
      <ServicesGrid services={services} />
    </>
  )
}

export default Main
