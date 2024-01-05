export interface IGateDetail {
  id: number
  uuid: string
  status: string
  title: string
  currency: {
    name: string
  }
  content: string
  language: string
  amount: number
  limitPay: number
  expiredAt: string
  contactInfo: {
    email: string | null
    socials: ISocial
    phoneNumber: string | null
  }
  createdAt: string
}

interface ISocial {
  telegram: string | null
  instagram: string | null
}

export interface IPaymentBody {
  amount: number
  payerInfo: {
    name: string
    phoneNumber: string
    email: string
    description: string
  }
}

export interface IPaymentDetails {
  id: number
  timeout: number
  amount: number
  sandBox: boolean
  transactionFeePayer: string
  commissionFeePayer: string
  status: string
  paylinkInfo: {
    id: number
    uuid: string
    title: string
    content: string
    contactInfo: {
      email: string | null
      socials: ISocial
      phoneNumber: string | null
    }
  }
  gateway: {
    info: {
      name: string
      webUrl: string
      logo: string
      supportLink: any
      supportPhoneNumber: any
      supportEmail: string
    }
    language: string
  }
  transaction: any
  currency: { name: string; price: number }
  paymentAssets: [
    {
      address: string | null
      amount: string
      commissionFee: string
      transactionFee: string
      totalPaymentValue: string
      assetPriceInBase: string
      asset: any
    },
    {
      address: string | null
      amount: string
      commissionFee: string
      transactionFee: string
      totalPaymentValue: string
      assetPriceInBase: string
      asset: any
    }
  ]
  createdAt: string
}
