const chai = require('chai')
const chaiHttp = require('chai-http')
const { server } = require('./api')

chai.use(chaiHttp)

describe('/health', () => {
    test('returns 200', async () => {
        const response = await chai.request(server)
            .get('/api/health')

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'ok' })
    })
})
