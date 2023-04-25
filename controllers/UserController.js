module.exports = async () => {

    const index = async (req, res) => {

        try {

            res.status(200).json({
                message: 'User index'
            })

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }

    const create = async (req, res) => {

        try {

            const name = req.body.name

            if(!name) {
                res.status(400).json({
                    message: 'name is required.'
                })
                return
            }

            res.status(200).json({
                message: `User ${name} craeted`
            })

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }

    return {
        index,
        create,
    }
}