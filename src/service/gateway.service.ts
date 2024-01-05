import { IPaymentBody } from '@/types'

export const getPayment = async (name: string, id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/paylink/${name}/${id}`,
    {
      cache: 'no-store',
    }
  )
  const data = await res.json()

  console.log('data', data)

  if (res.ok) {
    return data
  } else {
    return {}
  }
}

export const createPayment = async (body: IPaymentBody, id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/paylink/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ body }),
    }
  )

  const data = await res.json()
  console.log('data ===>>>', data)
  return data
}

export const getPaymentDetails = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/detail/${id}`,
    {
      cache: 'no-store',
    }
  )
  const data = await res.json()

  console.log('data', data)

  if (res.ok) {
    return data
  } else {
    return {}
  }
}
