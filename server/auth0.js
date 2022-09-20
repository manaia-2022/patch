import jwt from 'express-jwt'
import jwks from 'jwks-rsa'

const domain = 'https://manaia-2022-jp.au.auth0.com'
const audience = 'https://patch/api'

export const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})
