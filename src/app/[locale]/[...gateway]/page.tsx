import GateWay from '@/components/gate-way'
import Icons from '@/components/shared/Icons'
import { getI18n } from '@/locales/server'
import { Provider } from '@/providers/I18nProvider'
import { getPayment } from '@/service/gateway.service'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export async function generateMetadata({ params }: { params: Params }) {
  const { result } = await getPayment(params?.gateway[0], params?.gateway[1])

  if (result) {
    return {
      title: {
        default: 'payment4',
        absolute: 'payment4',
        template: 'payment4',
      },
      icons: {},
      openGraph: {
        title: result?.title,
      },
    }
  }
}

const page = async ({ params }: { params: Params }) => {
  console.log('params ------>', params)

  const { result } = await getPayment(params?.gateway[0], params?.gateway[1])
  console.log('data----->', result)

  const icons = ['telegram', 'phone', 'mail', 'instagram']

  const t = await getI18n()

  return (
    <>
      <div className="mt-5 w-full ps-4 block md:hidden">
        <div className="">
          <span className="text-caption text-sm">Product name:</span>{' '}
          <span className="text-title">{result?.title}</span>
        </div>
        <div className="">
          <span className="text-caption text-sm">Product Description:</span>{' '}
          <span className="text-title">{result?.content}</span>
        </div>
      </div>
      <div className="w-full my-8 mb-12 md:my-0 md:w-[667px] bg-slate-100 flex items-stretch md:rounded-[20px] md:shadow-2xl">
        <div className="w-0 md:w-[248px] side-container rounded-l-[20px] md:relative">
          <div className="w-full text-center mt-12 hidden md:block px-2">
            <div className="">
              <span className="text-caption text-sm">Product name:</span>{' '}
              <span className="text-title text-sm">{result?.title}</span>
            </div>
            <div className="">
              <span className="text-caption text-sm">Product Description:</span>{' '}
              <span className="text-title text-sm">{result?.content}</span>
            </div>
          </div>
          <div className="hidden absolute w-[130px] md:flex items-center gap-4 md:bottom-8 left-0 right-0 mx-auto text-center">
            <Icons IconArray={icons} />
          </div>
        </div>
        <div className="w-full h-full md:w-[67%] my-28 relative">
          <Provider locale={params.locale}>
            <GateWay data={result} />
          </Provider>
        </div>
      </div>

      <div className="flex absolute w-[130px] md:hidden items-center gap-4 bottom-2 left-0 right-0 mx-auto text-center">
        <Icons IconArray={icons} />
      </div>
    </>
  )
}

export default page
