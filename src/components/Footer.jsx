import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sky-500 to-sky-700 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-white px-6 py-10 text-slate-800 shadow-xl md:flex-row md:px-12">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-bold text-sky-600">
              Здесь вы можете получить консультацию специалиста
            </h3>
            <p className="mt-3 text-sm text-slate-500">
              Просто оставьте ваши контакты и наш специалист обязательно
              свяжется с вами в ближайшее время.
            </p>
          </div>
          <button className="shrink-0 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-orange-600">
            Получить консультацию
          </button>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              Дизайн
            </h4>
            <ul className="space-y-2 text-sm text-sky-100">
              <li>Услуги:</li>
              <li>Логотип</li>
              <li>Брендинг</li>
              <li>Дизайн сайта</li>
              <li>Дизайн карточки товара</li>
              <li>Оформление для маркетплейсов</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              Контент
            </h4>
            <ul className="space-y-2 text-sm text-sky-100">
              <li>Услуги:</li>
              <li>
                <Link to="/" className="hover:text-white">
                  Фото на моделях
                </Link>
              </li>
              <li>Предметная фотосъёмка</li>
              <li>Видео</li>
              <li>Дизайн карточки товара и инфографика</li>
              <li>Текст + SEO</li>
              <li>
                <Link to="/photo-360" className="hover:text-white">
                  Фото 360
                </Link>
              </li>
              <li>Фотосъёмка в раскладку</li>
              <li>
                <Link to="/invisible-mannequin" className="hover:text-white">
                  Фото на невидимом манекене
                </Link>
              </li>
              <li>Имиджевая фотосъёмка</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              Контакты
            </h4>
            <ul className="space-y-2 text-sm text-sky-100">
              <li>Email:</li>
              <li>support@addmarkets.ru</li>
              <li className="pt-2">Телефон:</li>
              <li>+7 (495) 344 60 11</li>
              <li className="pt-2">Адрес:</li>
              <li>
                142004, МО, г. Домодедово, Каширское ш., д. 4, стр. 1, 5-й
                этаж, офис №312
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide">
              Маркетплейсы
            </h4>
            <p className="mb-3 text-sm text-sky-100">Лёгкий старт:</p>
            <button className="mb-6 rounded-full border border-white/60 px-4 py-2 text-xs font-semibold uppercase hover:bg-white hover:text-sky-600">
              Обратный звонок
            </button>
            <p className="mb-3 text-sm text-sky-100">
              Подпишитесь на наши соцсети и следите за новостями:
            </p>
            <div className="flex gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                IG
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                TG
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 bg-sky-800/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-sky-100 sm:flex-row sm:px-6 lg:px-8">
          <span className="text-base font-bold tracking-wide">ADDMARKETS</span>
          <span>© 2026 AddMarkets group</span>
          <span>Designed by: @work.kasper</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
