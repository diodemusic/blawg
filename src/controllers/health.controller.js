function health(req, res) {
    try {
        res.status(200).send({
            message: "LGTM 👍"
        });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

module.exports = {
    health
};
