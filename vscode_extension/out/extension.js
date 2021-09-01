"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "coglioncase" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('coglioncase.makeCoglion', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        var selection = editor.selection;
        var text = editor.document.getText(selection);
        // vscode.window.showInformationMessage(text);
        // const reversed = text.split('').reverse().join('');
        const coglion = makeCoglion(text);
        editor.edit(editBuilder => {
            editBuilder.replace(selection, coglion);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function makeCoglion(text) {
    let res = '';
    for (const char of text) {
        if ((/[a-zA-z]/).test(char)) {
            let rnd = Math.floor(Math.random() * 2); // numero casuale 0 / 1
            if (rnd === 0) {
                res += char.toLowerCase();
            }
            else {
                res += char.toUpperCase();
            }
        }
        else {
            res += char;
        }
    }
    return res;
}
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map