const defaultController = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running"
    })
}

module.exports = defaultController;