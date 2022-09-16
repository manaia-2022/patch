import request from 'superagent'

export function addPet(pet, token) {
  return request
    .post('/api/v1/pets/my')
    .set('Authorization', `Bearer ${token}`)
    .send(pet)
    .then((res) => {
      return res.body
    })
}

export async function getImageUrl(image, token) {
  const { name, type } = image
  const fileObject = {
    fileName: name,
    fileType: type,
  }

  const { signature, timestamp, cloudName, apiKey } = await request
    .post('/api/v1/pets/my/image')
    .send(fileObject)
    .set('Authorization', `Bearer ${token}`)
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
