"use strict";

const gulp = require("gulp");
const server = require("./server");



gulp.task("dev", cb => {

    const serverPort = 8001;
    server.listen(serverPort, () => {
        console.log(`Server is now running at port ${serverPort}...`);
    });
});
