import GateWay from '@/components/gate-way'
import SvgIcon from '@/components/svg-icon/SvgIcon'

const page = () => {
  const icons = ['telegram', 'phone', 'mail', 'instagram']

  return (
    <>
      <div className="pb-6 w-full ps-4 block md:hidden">
        <div className="">
          <span>Product name:</span> <span>Product1</span>
        </div>
        <div className="">
          <span>Product Description:</span> <span>color,size</span>
        </div>
      </div>
      <div className="w-full md:w-[667px] h-[75%] md:h-[90%] bg-slate-100 flex items-center md:rounded-[20px] md:shadow-2xl">
        <div className="w-0 md:w-[33%] h-full side-container rounded-l-[20px] md:relative">
          <div className="pb-6 w-full ps-4 hidden md:block">
            <div className="">
              <span>Product name:</span> <span>Product1</span>
            </div>
            <div className="">
              <span>Product Description:</span> <span>color,size</span>
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
