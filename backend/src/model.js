const Sequelize = require('sequelize')
const { CUMPA_DB } = require('./config')

let db
if (CUMPA_DB.includes('sqlite')) {
    db = new Sequelize({
        dialect: 'sqlite',
        storage: CUMPA_DB,
        logging: false
    })
} else {
    db = new Sequelize(CUMPA_DB)
}

// TODO: Define models here

const DAO = model => ({
    list(where = {}) {
        return model.findAll({ where, raw: true })
    },
    get(id) {
        return model.findByPk(id).then(entity => entity.get({ plain: true }))
    },
    create(data) {
        return model.create(data)
    },
    update(id, data) {
        return model.update(
            data,
            { where: { id } }
        )
    },
    del(id) {
        return model.destroy({ where: { id } })
    }
})

module.exports = {
    db,
    DAO
}
