const User = require('../models/User')

class UserController {
    async store(req, res) {
        const { username, password } = req.body;

        let user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({messanger: 'Usuário já existe.'})
        }
        else {
            const user = await User.create({
                username,
                password
            });

            return res.status(200).json({user, messanger: 'Usuário cadastrado com sucesso!'});
        }
    }
}

module.exports = new UserController;