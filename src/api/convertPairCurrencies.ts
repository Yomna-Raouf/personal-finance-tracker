import api from './api'

type ConvertPairCurrenciesResponse = {
  result: string
  time_last_update_unix: number
  time_next_update_unix: number
  conversion_rate: number
  documentation: string
  terms_of_use: string
  time_last_update_utc: string
  time_next_update_utc: string
  base_code: string
  target_code: string
}

export const convertPairCurrencies = (from: string, to: string) => {
  const response = api.get<ConvertPairCurrenciesResponse>(`pair/${from}/${to}`)
  return response
}
