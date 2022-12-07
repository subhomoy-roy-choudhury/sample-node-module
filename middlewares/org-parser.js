const orgParser = (req, res, next) => {
    let org;
    try {
        org = JSON.parse(req.get("x-org-data"));
        if (Object.keys(org).length === 0 || !org._id) {
            throw new Error();
        }
    } catch (error) {
        return res.status(401).json({ message: "Org not in request" });
    }
    req.org = org;
    next();
};

module.exports = {
    orgParser,
};
