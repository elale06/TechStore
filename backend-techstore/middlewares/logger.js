const logger = (req, res, next) => {
    // Formato de fecha: DD-MM-YYYY HH:mm
    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    console.log(`${req.method} ${req.url} ${formattedDate}`);
    next();
};

module.exports = logger;