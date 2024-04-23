const vscode = require('vscode');

// 在命令处理程序中获取当前光标位置
function getCursorPosition() {
    // 获取当前活动的文本编辑器
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        // 获取光标所在的位置
        const position = editor.selection.active;
        return { line: position.line, character: position.character };
    }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let isExist_img = false; // 图片 ![]()
    let isExist_task = false; // 任务/复选框 - [x]

    let key1 = vscode.commands.registerCommand('typora-shortcut-key.key1', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const cursorPosition = editor.selection.active;
        const currentLine = editor.document.lineAt(cursorPosition.line).text;

        editor.edit((editBuilder) => {
            const headerRegex = /^(#+)\s/;
            const match = currentLine.match(headerRegex);

            if (match && match[1].length !== 1) {
                // 如果当前行以不同数量的#开头，替换为正确数量的#
                editBuilder.replace(
                    new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length),
                    '# '
                );
            } else if (match) {
                // 如果当前行以一个#开头，删除这个#
                editBuilder.delete(new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length));
            } else {
                // 如果当前行没有#，插入一个#
                editBuilder.insert(new vscode.Position(cursorPosition.line, 0), '# ');
            }
        });
    });

    let key2 = vscode.commands.registerCommand('typora-shortcut-key.key2', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const cursorPosition = editor.selection.active;
        const currentLine = editor.document.lineAt(cursorPosition.line).text;

        editor.edit((editBuilder) => {
            const headerRegex = /^(#+)\s/;
            const match = currentLine.match(headerRegex);

            if (match && match[1].length !== 2) {
                // 如果当前行以不同数量的#开头，替换为正确数量的#
                editBuilder.replace(
                    new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length),
                    '## '
                );
            } else if (match) {
                // 如果当前行以一个#开头，删除这个#
                editBuilder.delete(new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length));
            } else {
                // 如果当前行没有#，插入一个#
                editBuilder.insert(new vscode.Position(cursorPosition.line, 0), '## ');
            }
        });
    });

    let key3 = vscode.commands.registerCommand('typora-shortcut-key.key3', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const cursorPosition = editor.selection.active;
        const currentLine = editor.document.lineAt(cursorPosition.line).text;

        editor.edit((editBuilder) => {
            const headerRegex = /^(#+)\s/;
            const match = currentLine.match(headerRegex);

            if (match && match[1].length !== 3) {
                // 如果当前行以不同数量的#开头，替换为正确数量的#
                editBuilder.replace(
                    new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length),
                    '### '
                );
            } else if (match) {
                // 如果当前行以一个#开头，删除这个#
                editBuilder.delete(new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length));
            } else {
                // 如果当前行没有#，插入一个#
                editBuilder.insert(new vscode.Position(cursorPosition.line, 0), '### ');
            }
        });
    });

    let key4 = vscode.commands.registerCommand('typora-shortcut-key.key4', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const cursorPosition = editor.selection.active;
        const currentLine = editor.document.lineAt(cursorPosition.line).text;

        editor.edit((editBuilder) => {
            const headerRegex = /^(#+)\s/;
            const match = currentLine.match(headerRegex);

            if (match && match[1].length !== 4) {
                // 如果当前行以不同数量的#开头，替换为正确数量的#
                editBuilder.replace(
                    new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length),
                    '#### '
                );
            } else if (match) {
                // 如果当前行以一个#开头，删除这个#
                editBuilder.delete(new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length));
            } else {
                // 如果当前行没有#，插入一个#
                editBuilder.insert(new vscode.Position(cursorPosition.line, 0), '#### ');
            }
        });
    });
    let key5 = vscode.commands.registerCommand('typora-shortcut-key.key5', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const cursorPosition = editor.selection.active;
        const currentLine = editor.document.lineAt(cursorPosition.line).text;

        editor.edit((editBuilder) => {
            const headerRegex = /^(#+)\s/;
            const match = currentLine.match(headerRegex);

            if (match && match[1].length !== 5) {
                // 如果当前行以不同数量的#开头，替换为正确数量的#
                editBuilder.replace(
                    new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length),
                    '##### '
                );
            } else if (match) {
                // 如果当前行以一个#开头，删除这个#
                editBuilder.delete(new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length));
            } else {
                // 如果当前行没有#，插入一个#
                editBuilder.insert(new vscode.Position(cursorPosition.line, 0), '##### ');
            }
        });
    });
    let key6 = vscode.commands.registerCommand('typora-shortcut-key.key6', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const cursorPosition = editor.selection.active;
        const currentLine = editor.document.lineAt(cursorPosition.line).text;

        editor.edit((editBuilder) => {
            const headerRegex = /^(#+)\s/;
            const match = currentLine.match(headerRegex);

            if (match && match[1].length !== 6) {
                // 如果当前行以不同数量的#开头，替换为正确数量的#
                editBuilder.replace(
                    new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length),
                    '###### '
                );
            } else if (match) {
                // 如果当前行以一个#开头，删除这个#
                editBuilder.delete(new vscode.Range(cursorPosition.line, 0, cursorPosition.line, match[0].length));
            } else {
                // 如果当前行没有#，插入一个#
                editBuilder.insert(new vscode.Position(cursorPosition.line, 0), '###### ');
            }
        });
    });
    let link = vscode.commands.registerCommand('typora-shortcut-key.link', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const linkRegex = /\[([^\]]*)\]\(([^)]*)\)/g; // 使用全局匹配
        const urlPattern = /^(https?:\/\/[^\s]+)/g; // 匹配 URL 的正则表达式
        let match = false;
        let startLink,
            endLink = null;
        let linkTitle = ''; // 初始化linkTitle
        let cursor = editor.selection.active;
        const curLineText = editor.document.lineAt(cursor.line).text;

        // 获取选中的文本
        let selection = editor.document.getText(editor.selection);

        // 如果为空，获取为剪贴板

        // 如果为空，获取为剪贴板
        if (!selection) {
            await vscode.env.clipboard.readText().then((clipText) => {
                // 此处使用剪贴板中的文本
                selection = clipText;
            });
        }

        // 检测选中的文本是否是一个 URL
        let isURL = urlPattern.test(selection);

        let matches;
        while ((matches = linkRegex.exec(curLineText)) !== null) {
            const matchStart = matches.index;
            const matchEnd = matchStart + matches[0].length;

            if (cursor.character >= matchStart && cursor.character <= matchEnd) {
                match = true;
                startLink = matchStart;
                endLink = matchEnd;
                linkTitle = matches[1];
                break;
            }
        }

        editor.edit((editBuilder) => {
            if (!match) {
                if (isURL) {
                    // 如果选中的内容是 URL，则将其插入到链接中，并不添加“链接”字样
                    editBuilder.delete(editor.selection);
                    editBuilder.insert(new vscode.Position(cursor.line, cursor.character), `[](${selection})`);
                } else {
                    // 如果选中的内容不是 URL，则插入空链接或者选入的内容
                    selection = editor.document.getText(editor.selection);
                    if (selection) {
                        editBuilder.delete(editor.selection);
                        editBuilder.insert(new vscode.Position(cursor.line, cursor.character), `[${selection}]()`);
                    } else {
                        editBuilder.insert(new vscode.Position(cursor.line, cursor.character), `[]()`);
                    }
                }
                let newPosition = new vscode.Position(cursor.line, cursor.character);
                editor.selection = new vscode.Selection(newPosition, newPosition);
            } else {
                editBuilder.delete(
                    new vscode.Range(
                        new vscode.Position(cursor.line, startLink),
                        new vscode.Position(cursor.line, endLink)
                    )
                );
                editBuilder.insert(new vscode.Position(cursor.line, startLink), `${linkTitle}`);
            }
        });
    });

    let img = vscode.commands.registerCommand('typora-shortcut-key.img', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        editor.edit((editBuilder) => {
            if (vscode.workspace.getConfiguration('typoraKey').get('comment')) {
                if (!isExist_img) {
                    editBuilder.insert(
                        new vscode.Position(getCursorPosition().line, 0),
                        `![图片alt](图片链接 "图片title")`
                    );
                    isExist_img = true;
                } else {
                    editBuilder.delete(
                        new vscode.Range(
                            new vscode.Position(getCursorPosition().line, 0),
                            new vscode.Position(getCursorPosition().line, 24)
                        )
                    );
                    isExist_img = false;
                }
            } else {
                if (!isExist_img) {
                    editBuilder.insert(new vscode.Position(getCursorPosition().line, 0), `![]()`);
                    isExist_img = true;
                } else {
                    editBuilder.delete(
                        new vscode.Range(
                            new vscode.Position(getCursorPosition().line, 0),
                            new vscode.Position(getCursorPosition().line, 5)
                        )
                    );
                    isExist_img = false;
                }
            }
        });
    });
    let task = vscode.commands.registerCommand('typora-shortcut-key.task', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        editor.edit((editBuilder) => {
            if (vscode.workspace.getConfiguration('typoraKey').get('comment')) {
                if (!isExist_task) {
                    editBuilder.insert(new vscode.Position(getCursorPosition().line, 0), `- [x] 任务`);
                    isExist_task = true;
                } else {
                    editBuilder.delete(
                        new vscode.Range(
                            new vscode.Position(getCursorPosition().line, 0),
                            new vscode.Position(getCursorPosition().line, 8)
                        )
                    );
                    isExist_task = false;
                }
            } else {
                if (!isExist_task) {
                    editBuilder.insert(new vscode.Position(getCursorPosition().line, 0), `- [x] `);
                    isExist_task = true;
                } else {
                    editBuilder.delete(
                        new vscode.Range(
                            new vscode.Position(getCursorPosition().line, 0),
                            new vscode.Position(getCursorPosition().line, 6)
                        )
                    );
                    isExist_task = false;
                }
            }
        });
    });
    // 选中文字，按 alt+b 实现行内代码-->**内容**
    let bold = vscode.commands.registerCommand('typora-shortcut-key.bold', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const document = editor.document;
        const selections = editor.selections;
        editor.edit(editBuilder => {
            selections.forEach(selection => {
                const startPosition = document.offsetAt(new vscode.Position(selection.start.line, 0));
                const startPositionWithIndent = startPosition + selection.start.character;
                const endPosition = document.offsetAt(new vscode.Position(selection.end.line, selection.end.character));
                const textInSelection = document.getText(new vscode.Range(selection.start, selection.end));
                let newText;
                if (textInSelection.includes('**')) {
                    newText = textInSelection.replace(/\*\*/g, '');
                } else {
                    newText = `**${textInSelection.trim()}**`;
                }
                editBuilder.replace(
                    new vscode.Range(document.positionAt(startPositionWithIndent), document.positionAt(endPosition)),
                    newText
                );
            });
        });
    });
    // 选中文字，按 alt+m 实现行内代码-->$内容$
    let lineMath = vscode.commands.registerCommand('typora-shortcut-key.lineMath', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const line = document.lineAt(selection.start.line);
            const range = new vscode.Range(
                selection.start.line, // 起始行
                line.firstNonWhitespaceCharacterIndex + selection.start.character, // 起始字符
                selection.end.line, // 结束行
                selection.end.character // 结束字符
            );
            if (selection.isEmpty) {
                const currentPosition = editor.selection.active;
                const textBeforeCursor = document.getText(
                    new vscode.Range(
                        currentPosition.line,
                        Math.max(currentPosition.character - 1, 0),
                        currentPosition.line,
                        currentPosition.character
                    )
                );
                const textAfterCursor = document.getText(
                    new vscode.Range(
                        currentPosition.line,
                        currentPosition.character,
                        currentPosition.line,
                        currentPosition.character + 1
                    )
                );

                if (textBeforeCursor === '$' && textAfterCursor === '$') {
                    // 如果光标前后字符都是美元符，则删除它们
                    editor.edit((editBuilder) => {
                        editBuilder.delete(
                            new vscode.Range(
                                currentPosition.line,
                                currentPosition.character - 1,
                                currentPosition.line,
                                currentPosition.character + 1
                            )
                        );
                    });
                } else {
                    // 原有的代码逻辑，如插入美元符等
                    editor
                        .edit((editBuilder) => {
                            editBuilder.insert(
                                new vscode.Position(getCursorPosition().line, getCursorPosition().character),
                                '$$'
                            );
                        })
                        .then(() => {
                            let newPosition = new vscode.Position(range.start.line, range.start.character + 1);
                            editor.selection = new vscode.Selection(newPosition, newPosition);
                        });
                }
            } else {
                if (document.getText(range).includes('$')) {
                    // 如果选区内存在反引号，则删除反引号
                    editor.edit((editBuilder) => {
                        let newStr = document.getText(range).replace(/\$/g, '');
                        editBuilder.replace(range, newStr);
                    });
                } else {
                    // 否则，在选区前后加入反引号
                    editor.edit((editBuilder) => {
                        editBuilder.replace(range, '$' + document.getText(range) + '$');
                    });
                }
            }
        }
    });

    // 选中文字，按ctrl/cmd+`实现行内代码-->`内容`
    let lineCode = vscode.commands.registerCommand('typora-shortcut-key.lineCode', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const line = document.lineAt(selection.start.line);
            const range = new vscode.Range(
                selection.start.line, // 起始行
                line.firstNonWhitespaceCharacterIndex + selection.start.character, // 起始字符
                selection.end.line, // 结束行
                selection.end.character // 结束字符
            );
            if (selection.isEmpty) {
                const currentPosition = editor.selection.active;
                const textBeforeCursor = document.getText(
                    new vscode.Range(
                        currentPosition.line,
                        Math.max(currentPosition.character - 1, 0),
                        currentPosition.line,
                        currentPosition.character
                    )
                );
                const textAfterCursor = document.getText(
                    new vscode.Range(
                        currentPosition.line,
                        currentPosition.character,
                        currentPosition.line,
                        currentPosition.character + 1
                    )
                );

                if (textBeforeCursor === '`' && textAfterCursor === '`') {
                    // 如果光标前后字符都是反引号，则删除它们
                    editor.edit((editBuilder) => {
                        editBuilder.delete(
                            new vscode.Range(
                                currentPosition.line,
                                currentPosition.character - 1,
                                currentPosition.line,
                                currentPosition.character + 1
                            )
                        );
                    });
                } else {
                    // 原有的代码逻辑，如插入反引号等
                    editor
                        .edit((editBuilder) => {
                            editBuilder.insert(
                                new vscode.Position(getCursorPosition().line, getCursorPosition().character),
                                '``'
                            );
                        })
                        .then(() => {
                            let newPosition = new vscode.Position(range.start.line, range.start.character + 1);
                            editor.selection = new vscode.Selection(newPosition, newPosition);
                        });
                }
            } else {
                if (document.getText(range).includes('`')) {
                    // 如果选区内存在反引号，则删除反引号
                    editor.edit((editBuilder) => {
                        let newStr = document.getText(range).replace(/`/g, '');
                        editBuilder.replace(range, newStr);
                    });
                } else {
                    // 否则，在选区前后加入反引号
                    editor.edit((editBuilder) => {
                        editBuilder.replace(range, '`' + document.getText(range) + '`');
                    });
                }
            }
        }
    });
    // 代码块
    let code = vscode.commands.registerCommand('typora-shortcut-key.code', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const currentPosition = editor.selection.active;

        let textInRange = '';
        if (editor.document.lineCount >= currentPosition.line + 2) {
            // 获取当前行到下两行的文本
            textInRange = editor.document.getText(
                new vscode.Range(
                    new vscode.Position(currentPosition.line, Math.max(0, currentPosition.character - 3)),
                    new vscode.Position(currentPosition.line + 2, 1000)
                )
            );
        }

        // 检查当前行到下两行的文本是否满足特定格式：当前行为空行，下一行为三个`，下下行为空行
        if (editor.selection.isEmpty && textInRange === '```\n\n```') {
            // 删除这三行
            editor.edit((editBuilder) => {
                editBuilder.delete(
                    new vscode.Range(
                        new vscode.Position(currentPosition.line, 0),
                        new vscode.Position(currentPosition.line + 2, 1000)
                    )
                );
            });
        } else {
            // 插入代码块
            let insertTemplate = `\`\`\`

\`\`\``;
            // 首先检查当前行是否为空行
            let currentLenth = editor.document.lineAt(currentPosition.line).text.length;
            if (currentLenth) {
                insertTemplate = '\n' + insertTemplate;
            }

            editor
                .edit((editBuilder) => {
                    editBuilder.insert(currentPosition, insertTemplate);
                })
                .then(() => {
                    // 将光标移到语言类型位置
                    // 获得下一行的末尾
                    let nextLine = currentPosition.line + 1;
                    if (!currentLenth) {
                        nextLine = currentPosition.line;
                    }
                    const nextLineLength = editor.document.lineAt(nextLine).text.length;
                    let newPosition = new vscode.Position(nextLine, nextLineLength);
                    editor.selection = new vscode.Selection(newPosition, newPosition);
                });
        }
    });

    let math = vscode.commands.registerCommand('typora-shortcut-key.math', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const currentPosition = editor.selection.active;

        let textInRange = '';
        if (editor.document.lineCount >= currentPosition.line + 1) {
            // 获取当前行和上下两行的文本
            textInRange = editor.document.getText(
                new vscode.Range(
                    new vscode.Position(Math.max(0, currentPosition.line - 1), 0),
                    new vscode.Position(currentPosition.line + 1, 1000)
                )
            );
        }

        // 检查当前行到下两行的文本是否满足特定格式：当前行为空行，下一行为三个`，下下行为空行
        if (editor.selection.isEmpty && textInRange === '$$\n\n$$') {
            // 删除这三行
            editor.edit((editBuilder) => {
                editBuilder.delete(
                    new vscode.Range(
                        new vscode.Position(Math.max(0, currentPosition.line - 1), 0),
                        new vscode.Position(currentPosition.line + 1, 1000)
                    )
                );
            });
        } else {
            // 插入代码块
            let insertTemplate = `$$

$$`;
            // 首先检查当前行是否为空行
            let currentLenth = editor.document.lineAt(currentPosition.line).text.length;
            if (currentLenth) {
                insertTemplate = '\n' + insertTemplate;
            }

            editor
                .edit((editBuilder) => {
                    editBuilder.insert(currentPosition, insertTemplate);
                })
                .then(() => {
                    let nextLine = currentPosition.line + 2;
                    if (!currentLenth) {
                        nextLine = currentPosition.line + 1;
                    }
                    let newPosition = new vscode.Position(nextLine, 0);
                    editor.selection = new vscode.Selection(newPosition, newPosition);
                });
        }
    });

    context.subscriptions.push(key1);
    context.subscriptions.push(key2);
    context.subscriptions.push(key3);
    context.subscriptions.push(key4);
    context.subscriptions.push(key5);
    context.subscriptions.push(key6);
    context.subscriptions.push(link);
    context.subscriptions.push(img);
    context.subscriptions.push(task);
    context.subscriptions.push(bold);
    context.subscriptions.push(lineMath);
    context.subscriptions.push(lineCode);
    context.subscriptions.push(code);
    context.subscriptions.push(math);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate,
};
