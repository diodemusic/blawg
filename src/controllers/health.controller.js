function health(req, res) {
    res.status(200).send({
        message: "LGTM 2.0 👍"
    });
}

module.exports = {
    health
};
