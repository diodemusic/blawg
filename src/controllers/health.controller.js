function health(req, res) {
    res.status(200).send({
        message: "LGTM 👍"
    });
}

module.exports = {
    health
};
