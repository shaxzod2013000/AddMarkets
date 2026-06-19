import {
  Hero,
  TariffBlock,
  RequestForm,
  SocialFollow,
  ServicesGrid,
} from '../components/Sections.jsx'

const services = [
  'Фотосъёмка в раскладку',
  'Фотосъёмка на моделях',
  'Предметная фотосъёмка',
  'Фото на невидимом манекене',
  'Дизайн карточек товар и инфографика',
  'Видео',
  'Текст + SEO',
  'Имиджевая фотосъёмка',
]

function SecondPage() {
  return (
    <>
      <Hero
        title="Фотосъёмка 360 / 3D фото"
        bullets={[
          'Фото 360 дает возможность детально рассмотреть продукт со всех сторон.',
          'За счет вращения продукта в разные стороны, увеличивается время нахождения клиента на карточке Вашего товара, растет CTR и вероятность покупки.',
          'Помните - 97% Ваших конкурентов не используют фото 360!',
        ]}
      />

      <h2 className="mx-auto max-w-7xl px-4 pt-12 text-center text-2xl font-bold text-sky-600 sm:px-6 lg:px-8">
        Тарифы
      </h2>

      <TariffBlock
        title="Предметное фото 360"
        description="В стоимость включено: Fashion-фотограф, фотостудия, постобработка и ретушь-фото, подготовка вещей к съёмке. От 12 кадров"
        price={70}
        unit="Цена за 1 кадр"
      />
      <TariffBlock
        title="Фотосъёмка на невидимом манекене 360"
        description="В стоимость включено: Fashion-фотограф, фотостудия, постобработка и ретушь-фото, глажка вещей паром. От 12 кадров"
        price={100}
        unit="Цена за 1 кадр"
      />

      <RequestForm />
      <SocialFollow />
      <ServicesGrid services={services} />
    </>
  )
}

export default SecondPage
