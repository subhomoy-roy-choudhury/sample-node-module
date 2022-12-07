const appParser = (req, res, next) => {
    let app;
    try {
        app = JSON.parse(req.get("x-app-data"));
        if (Object.keys(app).length === 0 || !app._id) {
            throw new Error();
        }
    } catch (error) {
        return res.status(401).json({ message: "App not in request" });
    }
    req.app = app;
    next();
};

module.exports = {
    appParser,
};
