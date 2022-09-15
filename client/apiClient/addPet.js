import request from 'superagent'

export function addPet(pet) {
  console.log(pet)
  return request
    .post('/api/v1/pets/my')
    .send(pet)
    .then((res) => {
      console.log('From API: ', res)
      return res.body
    })
}

// const input = { name: 'name.png', type: 'image/png' }
export async function getImageUrl(image) {
  const { name, type } = image
  const fileObject = {
    fileName: name,
    fileType: type,
  }

  const { signature, timestamp, cloudName, apiKey } = await request
    .post('/api/v1/pets/my/image')
    .send(fileObject)
    .then((res) => res.body)

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

  const formData = new FormData()
  formData.append('file', image)
  formData.append('api_key', apiKey)
  formData.append('timestamp', timestamp)
  formData.append('signature', signature)

  const imageUrl = await request
    .post(url)
    .send(formData)
    .then((res) => res.body.url)

  return imageUrl
}
