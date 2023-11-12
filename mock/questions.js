const Mock = require('mockjs')
const Random = Mock.Random
module.exports = [
    {
        url: '/api/questions/:id',
        method: 'get',
        response: () => {
            return {
                error: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle()
                }
            }
        }

    },
    {
        url: '/api/questions/postTest',
        method: 'post',
        response: () => {
            return {
                error: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    method: 'post'
                }
            }
        }

    }
]