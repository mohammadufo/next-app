import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import SvgIcon from '@/components/svg-icon/SvgIcon'
import Icons from '@/components/shared/Icons'

const page = ({ params }: { params: Params }) => {
  const icons = ['phone', 'mail', 'instagram']
  const status = 'mismatch'
  return (
    <div className="w-screen md:w-[542px] bg-white md:rounded-[20px]">
      <div className="flex gap-2 items-center m-4">
        <Image alt="logo" src={Logo} width={82} height={20} />
        <span className="text-span text-xxs">Cryptocurrency payment</span>
      </div>
      <div
        className={`w-full ${
          status === 'success'
            ? 'bg-bg_success'
            : status === 'acceptable'
            ? 'bg-bg_warning'
            : 'bg-bg_danger'
        } py-7 flex flex-col items-center justify-center gap-4`}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <SvgIcon name={status} />
          <span
            className={`${
              status === 'success'
                ? 'text-success'
                : status === 'acceptable'
                ? 'text-warning'
                : 'text-danger'
            }  text-sm`}
          >
            {status}
          </span>
        </div>
        <span className="text-black/60 text-base">
          30.00 USD paid Dec 31, 2023
        </span>
      </div>
      <div className="w-full flex px-8 my-4 flex-col items-center">
        <div className="flex w-full items-center justify-between py-4 border-b border-border_2/75">
          <span className="text-title_2 text-sm ">Date and Time:</span>

          <div className="flex items-center gap-2">
            <span className="text-sm text-span_2">2023/12/31</span>
            <span className="text-sm text-span_2">11:34:52</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between py-4 border-b border-border_2/75">
          <span className="text-title_2 text-sm ">Transaction ID:</span>
          <span className="text-sm text-span_2">23456778</span>
        </div>
        <div className="flex w-full items-center justify-between py-4 border-b border-border_2/75">
          <span className="text-title_2 text-sm ">Payers Name:</span>
          <span className="text-sm text-span_2">Muhammad UFO</span>
        </div>
        <div className="flex w-full items-center justify-between py-4 border-b border-border_2/75">
          <span className="text-title_2 text-sm ">Product Name:</span>
          <span className="text-sm text-span_2">Black Shirt</span>
        </div>
        <div className="flex w-full items-center justify-between py-4 border-b border-border_2/75">
          <span className="text-title_2 text-sm ">Product Description:</span>
          <span className="text-sm text-span_2">Size1, color1</span>
        </div>
        <div className="flex w-full items-center justify-between py-4 border-b border-border_2/75">
          <span className="text-title_2 text-sm ">Gateways Name:</span>
          <span className="text-sm text-span_2">Esmith</span>
        </div>

        <div className="flex w-full flex-col md:flex-row items-center justify-between my-4 gap-4 md:gap-1">
          <span className="text-span_2 text-xs w-full md:w-[50%]">
            Thank you for your payment! We appreciate you.
          </span>

          <button className="flex items-center gap-1 justify-center bg-primary px-3 py-2 rounded w-full md:w-auto shadow-md">
            <SvgIcon name="download" />
            <span className="text-white text-sm font-normal">
              Download as PDF
            </span>
          </button>
        </div>

        <div className="my-4 w-full flex items-center justify-between">
          <span>+98234768912</span>
          <div>
            <Icons IconArray={icons} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
