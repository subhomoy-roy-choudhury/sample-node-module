import {RoutePermissions} from '../route-permissions';

req = {
    'x-staff-data': {
        _id : '0123456789abcdef01234567'
    }
}

const RouteFilterMiddleware = (req, res=none, next) => {
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
    route_permissions_array = RoutePermissions[req.staff];
    for(i=0;i<=route_permissions_array.length;i++){
        console.log(route_permissions_array[i].regex)
    }
    
    // next();
};

module.exports = {
    RouteFilterMiddleware,
};
