const { drinks, flavors } = require('./data/drinks')
const { createMenu, prepareForAPI } = require('./utils/menu')
const { api, apiUrl } = require('./api')
const menu = createMenu(drinks, flavors)

const sendHelp = (req, res) => {
    res.send({
        message: 'Welcome to the Elf Coffee Shop API! 🧝🥤',
        availableRoutes: [
            {
                route: '/menu',
                description: 'Fetch the menu',
                url: `${apiUrl}/menu`,
            },
        ],
    })
}

const sendMenu = (req, res) => {
    try {
        console.log(prepareForAPI(menu))
        res.send(prepareForAPI(menu))
    } catch (error) {
        console.error(error.message)
        res.status(500).send({
            message: 'Something went wrong fetching the menu 🤷‍♂️',
        })
    }
}

api.get('/', sendHelp)
api.get('/menu', sendMenu)
