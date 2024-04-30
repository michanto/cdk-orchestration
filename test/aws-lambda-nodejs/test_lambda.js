"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
exports.handler = async (event, context) => {
    console.log(`Event: ${JSON.parse(JSON.stringify(event))}`);
    console.log(`Context: ${JSON.stringify(context)}`);
    return Promise.resolve({});
};
