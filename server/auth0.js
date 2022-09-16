import jwt from 'express-jwt'
import jwks from 'jwks-rsa'

// TODO: set the domain and audience (API Identifier)
const domain = 'manaia-2022-jp.au.auth0.com'
const audience = 'https://patch/api'

const checkJwt = jwt({
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

export default checkJwt
