"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = void 0;
// export const init = (store) => {
//     if (!socket) {
//         // establish a socket connection once
//         // socket = io.connect();
//         // REVIEW with Merle
//         socket = io();
//     }
//     socket.on("last-10-messages", (msgs: string) => {
//         console.log("server just emitted last-20-messages", msgs);
//         // time to dispatch an action messages/received would be a good one
//         // pass to action creator the messages your server emitted
//     });
//     socket.on("add-new-message", (msg: string) => {
//         console.log("server just emitted a new msg to add", msg);
//         // time to dispatch an action message/addNew would be a good one
//         // pass to action the object containing the message, and the user info
//         // of the author
//     });
// };
