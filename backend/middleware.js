function logger(req, res, next) {
//  console.log(`${req.method} ${req.url}`);
console.log("middleware is running");
 next(); // Move to the next middleware
}
export default logger;