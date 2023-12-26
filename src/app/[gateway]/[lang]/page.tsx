import GateWay from '@/components/gate-way'
import SvgIcon from '@/components/svg-icon/SvgIcon'

const page = () => {
  const icons = ['telegram', 'phone', 'mail', 'instagram']

  return (
    <>
      <div className="pb-6 w-full ps-4 block md:hidden">
        <div className="">
          <span className="text-caption text-sm">Product name:</span>{' '}
          <span className="text-title">Product2</span>
        </div>
        <div className="">
          <span className="text-caption text-sm">Product Description:</span>{' '}
          <span className="text-title">color,size</span>
        </div>
      </div>
      <div className="w-full md:w-[667px] h-[75%] md:h-[90%] bg-slate-100 flex items-center md:rounded-[20px] md:shadow-2xl">
        <div className="w-0 md:w-[248px] h-full side-container rounded-l-[20px] md:relative">
          <div className="pb-6 w-full text-center mt-12 hidden md:block">
            <div className="">
              <span className="text-caption text-sm">Product name:</span>{' '}
              <span className="text-title text-sm">Product1</span>
            </div>
            <div className="">
              <span className="text-caption text-sm">Product Description:</span>{' '}
              <span className="text-title text-sm">color,size</span>
            </div>
          </div>
          <div className="absolute w-[130px] flex items-center gap-4 bottom-6 md:bottom-8 left-0 right-0 mx-auto text-center">
            {icons.map((item, index) => (
              <SvgIcon name={item} key={index} />
            ))}
          </div>
        </div>
        <div className="w-full h-full md:w-[67%] relative">
          <GateWay />
        </div>
      </div>
    </>
  )
}

export default page
