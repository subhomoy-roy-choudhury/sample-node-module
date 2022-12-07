const staffParser = (req, res, next) => {
    let staff;
    try {
        staff = JSON.parse(req.get("x-staff-data"));
        if (Object.keys(staff).length === 0 || !staff._id) {
            throw new Error();
        }
    } catch (error) {
        return res.status(403).json({ message: "Unauthorized" });
    }
    req.staff = staff;
    next();
};

module.exports = {
    staffParser,
};