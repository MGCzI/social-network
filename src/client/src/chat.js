"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var socket_1 = require("./socket");
function Chat() {
    var messagesInfo = (0, react_redux_1.useSelector)(function (state) { return state.messages; });
    // KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    (0, react_1.useEffect)(function () {
        var abort = false;
        socket_1.socket.emit("newest-generalMsg-chat", null);
        return function () {
            console.log("Running clean up in chat");
            abort = true;
        };
    }, []);
    // React.ChangeEvent<HTMLTextAreaElement>
    var keyCheck = function (event) {
        console.log("What was pass.");
        if (event.key === "Enter") {
            event.preventDefault();
            console.log("event.target.value", event.target.value);
            socket_1.socket.emit("generalMsg-new-message", event.target.value);
            event.target.value = "";
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "container-main-width" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome to chat" }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "chat-container" }, { children: messagesInfo &&
                    messagesInfo.map(function (each) {
                        return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "message" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [each.name, " ", each.surname] }), (0, jsx_runtime_1.jsx)("h3", { children: each.message }), (0, jsx_runtime_1.jsx)("h6", { children: each.send_at })] }), each.id));
                    }) })), (0, jsx_runtime_1.jsx)("textarea", { placeholder: "Write a new Message", onKeyDown: keyCheck })] })));
}
exports.default = Chat;
