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

function FirstPage() {
  return (
    <>
      <Hero
        title="Фотосъёмка на невидимом манекене"
        bullets={[
          'Фотографии на невидимом манекене используются для одежды, белья, носочно-чулочной продукции и головных уборов.',
          'Невидимый манекен придает объем продукции, при этом не отвлекает внимание покупателя от самого изделия.',
        ]}
      />

      <h2 className="mx-auto max-w-7xl px-4 pt-12 text-center text-2xl font-bold text-sky-600 sm:px-6 lg:px-8">
        Тарифы
      </h2>

      <TariffBlock
        title="Фото на невидимом манекене аксессуаров одежды"
        description="Носочно-чулочные изделия, нижнее белье, головные уборы, перчатки и т.п."
        price={150}
      />
      <TariffBlock
        title="Фото на невидимом манекене верхней одежды"
        description="Футболки, рубашки, толстовки, платья, брюки, куртки, пальто и т.п."
        price={170}
      />

      <RequestForm />
      <SocialFollow />
      <ServicesGrid services={services} />
    </>
  )
}

export default FirstPage
