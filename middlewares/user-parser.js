const userParser = (req, res, next) => {
    let user;
    try {
        user = JSON.parse(req.get("x-user-data"));
        if (Object.keys(user).length === 0 || !user._id) {
            throw new Error();
        }
    } catch (error) {
        return res.status(401).json({ message: "User not in request" });
    }
    req.user = user;
    next();
};

module.exports = {
    userParser,
};
