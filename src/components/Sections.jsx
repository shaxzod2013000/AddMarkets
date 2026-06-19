// Reusable section blocks shared across the service pages.
import heroImg from '../assets/Group 361.png'
import phoneImg from '../assets/phone.png'
import frame6Img from '../assets/Frame (6).png'
import instagramImg from '../assets/INSTAGRAM 4.png'
import telegramImg from '../assets/telegram.png'
import rect480 from '../assets/Rectangle 480.png'
import rect478 from '../assets/Rectangle 478.png'
import rect479 from '../assets/Rectangle 479.png'
import rect480_2 from '../assets/Rectangle 480 (2).png'
import rect478_1 from '../assets/Rectangle 478 (1).png'
import rect479_1 from '../assets/Rectangle 479 (1).png'

function PlaceholderImage({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-slate-200 ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        className="text-slate-400"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
        <path
          d="M21 15l-5-5-4 4-3-3-6 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function Hero({ title, bullets, image }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl">
            {title}
          </h1>
          <ul className="mt-6 space-y-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-600 sm:text-base">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold uppercase text-white shadow-lg shadow-orange-200 transition-colors hover:bg-orange-600">
            Оставить заявку
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={image || heroImg}
            alt="Hero"
            className="w-full max-w-sm object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export function TariffBlock({ title, description, price, unit = 'Цена за 1 фото', images = [] }) {
  // -------------------------------------------------------
  // Rasmlarni shu yerga qo'shing:
  //   images={[rasm1, rasm2, rasm3]}
  // Agar rasm bo'lmasa — bo'sh joy avtomatik ko'rinadi
  // -------------------------------------------------------

  const CARD_STYLE = { width: '380px', height: '506px' }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">{description}</p>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-sm text-slate-500">ОТ </span>
          <span className="text-3xl font-extrabold text-slate-800">{price} ₽</span>
          <p className="text-xs text-slate-400">{unit}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((i) =>
          images[i] ? (
            <img
              key={i}
              src={images[i]}
              alt={`tariff-${i}`}
              style={CARD_STYLE}
              className="object-cover rounded-2xl w-full"
            />
          ) : (
            <div
              key={i}
              style={CARD_STYLE}
              className="flex items-center justify-center rounded-2xl bg-slate-200 w-full"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-slate-400">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                <path d="M21 15l-5-5-4 4-3-3-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export function RequestForm() {
  const checkboxes = [
    'SEO оптимизированные тексты',
    'Видео',
    'Фото на моделях',
    'Имиджевая фотосъёмка',
    'Дизайн карточки товара и инфографика',
    'Предметное фото',
    'Фото 360',
    'Фото на невидимом манекене',
    'Фото раскладка товара',
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl">
          <h3 className="text-xl font-bold text-sky-600">
            Запросить расчет стоимости
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Заполните форму и оператор «AddMarkets» свяжется с Вами в
            ближайшее время
          </p>

          <p className="mt-6 text-xs font-semibold uppercase text-slate-400">
            Ценообразование
          </p>
          <div className="mt-3 space-y-3">
            <input
              type="text"
              placeholder="Имя *"
              className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-sky-400"
            />
            <input
              type="text"
              placeholder="Телефон *"
              className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-sky-400"
            />
            <input
              type="email"
              placeholder="E-mail *"
              className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-sky-400"
            />
            <input
              type="text"
              placeholder="Имя на маркетплейсе"
              className="w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-sky-400"
            />
            <textarea
              placeholder="Продукция — обувь, ткани, картинки, мебель, посуда и т.д."
              rows={3}
              className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-sky-400"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            {checkboxes.map((label) => (
              <label
                key={label}
                className="flex items-center gap-2 text-xs text-slate-600"
              >
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                {label}
              </label>
            ))}
          </div>

          <button className="mt-6 w-full rounded-full border-2 border-sky-400 py-3 text-sm font-semibold uppercase text-sky-500 transition-colors hover:bg-sky-400 hover:text-white">
            Кнопка
          </button>
          <label className="mt-3 flex items-center gap-2 text-xs text-slate-400">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
            С{' '}
            <a href="#" className="text-sky-500 underline">
              Политикой конфиденциальности
            </a>{' '}
            ознакомлен
          </label>
        </div>

        <div className="flex justify-center">
          <img
            src={phoneImg}
            alt="Phone"
            className="w-full max-w-sm object-contain rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export function SocialFollow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-slate-50 px-6 py-10 md:flex-row md:justify-between">
        {/* Frame 6 rasmi */}
        <img
          src={frame6Img}
          alt="Frame 6"
          className="w-full max-w-xs object-contain"
        />
        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-sm text-slate-500 text-center md:text-left">
            Следите за новостями о сборных фотосессиях, новых локациях и
            моделях в наших соц. сетях:
          </p>
          {/* Instagram va Telegram ikonkalari */}
          <div className="flex gap-4">
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={instagramImg} alt="Instagram" className="h-10 w-10 object-contain" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={telegramImg} alt="Telegram" className="h-10 w-10 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesGrid({ services }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex justify-center">
        <h3 className="text-2xl font-bold text-slate-800">Наши сервисы:</h3>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.label}
            style={{ width: '244px', height: '244px' }}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white text-center shadow-sm"
          >
            {service.icon ? (
              <img src={service.icon} alt={service.label} className="h-16 w-16 object-contain" />
            ) : (
              <PlaceholderImage className="h-16 w-16" />
            )}
            <span className="text-xs font-medium text-slate-600">
              {service.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
