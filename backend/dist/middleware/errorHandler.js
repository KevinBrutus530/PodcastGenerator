"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err.message || "An error occurred");
    res.status(500).json({
        success: false,
        error: err.message || "Internal Server Error",
    });
};
exports.default = errorHandler;
