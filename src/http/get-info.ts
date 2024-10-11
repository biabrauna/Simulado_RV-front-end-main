export interface GetInfosResponse {
  infos: {
    id: string
    title: string
    subjects: string,
  }[]
}

export async function getInfos(): Promise<GetInfosResponse> {
  const response = await fetch('http://localhost:3333/infos')
  const data = await response.json()
  console.log(data)
  return data

}
