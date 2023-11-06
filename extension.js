const vscode = require("vscode");

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
  let isExist_h1 = false; // # 一级标题
  let isExist_h2 = false; // ## 二级标题
  let isExist_h3 = false; // ### 三级标题
  let isExist_h4 = false; // #### 四级标题
  let isExist_h5 = false; // ##### 五级标题
  let isExist_h6 = false; // ###### 六级标题
  let isExist_link = false; // 链接 []()
  let isExist_img = false; // 图片 ![]()
  let isExist_task = false; // 任务/复选框 - [x]

  let key1 = vscode.commands.registerCommand("typora-shortcut-key.key1", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_h1) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          "# "
        );
        isExist_h1 = true;
      } else {
        editBuilder.delete(
          new vscode.Range(
            new vscode.Position(getCursorPosition().line, 0),
            new vscode.Position(getCursorPosition().line, 2)
          )
        );
        isExist_h1 = false;
      }
    });
  });
  let key2 = vscode.commands.registerCommand("typora-shortcut-key.key2", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_h2) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          "## "
        );
        isExist_h2 = true;
      } else {
        editBuilder.delete(
          new vscode.Range(
            new vscode.Position(getCursorPosition().line, 0),
            new vscode.Position(getCursorPosition().line, 3)
          )
        );
        isExist_h2 = false;
      }
    });
  });
  let key3 = vscode.commands.registerCommand("typora-shortcut-key.key3", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_h3) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          "### "
        );
        isExist_h3 = true;
      } else {
        editBuilder.delete(
          new vscode.Range(
            new vscode.Position(getCursorPosition().line, 0),
            new vscode.Position(getCursorPosition().line, 4)
          )
        );
        isExist_h3 = false;
      }
    });
  });
  let key4 = vscode.commands.registerCommand("typora-shortcut-key.key4", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_h4) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          "#### "
        );
        isExist_h4 = true;
      } else {
        editBuilder.delete(
          new vscode.Range(
            new vscode.Position(getCursorPosition().line, 0),
            new vscode.Position(getCursorPosition().line, 5)
          )
        );
        isExist_h4 = false;
      }
    });
  });
  let key5 = vscode.commands.registerCommand("typora-shortcut-key.key5", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_h5) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          "##### "
        );
        isExist_h5 = true;
      } else {
        editBuilder.delete(
          new vscode.Range(
            new vscode.Position(getCursorPosition().line, 0),
            new vscode.Position(getCursorPosition().line, 6)
          )
        );
        isExist_h5 = false;
      }
    });
  });
  let key6 = vscode.commands.registerCommand("typora-shortcut-key.key6", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_h6) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          "###### "
        );
        isExist_h6 = true;
      } else {
        editBuilder.delete(
          new vscode.Range(
            new vscode.Position(getCursorPosition().line, 0),
            new vscode.Position(getCursorPosition().line, 7)
          )
        );
        isExist_h6 = false;
      }
    });
  });
  let link = vscode.commands.registerCommand("typora-shortcut-key.link", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_link) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          `[超链接显示名](超链接地址 "超链接title")`
        );
        isExist_link = true;
      } else {
        editBuilder.delete(
          new vscode.Range(
            new vscode.Position(getCursorPosition().line, 0),
            new vscode.Position(getCursorPosition().line, 26)
          )
        );
        isExist_link = false;
      }
    });
  });
  let img = vscode.commands.registerCommand("typora-shortcut-key.img", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
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
    });
  });
  let task = vscode.commands.registerCommand("typora-shortcut-key.task", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      if (!isExist_task) {
        editBuilder.insert(
          new vscode.Position(getCursorPosition().line, 0),
          `- [x] 任务`
        );
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
    });
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
      if (document.getText(range).includes('`')) {
        // 如果选区内存在反引号，则删除反引号
        editor.edit(editBuilder => {
          let newStr = document.getText(range).replace(/`/g, '');
          editBuilder.replace(range, newStr);
        });
      } else {
        // 否则，在选区前后加入反引号
        editor.edit(editBuilder => {
          editBuilder.replace(range, '`' + document.getText(range) + '`');
        });
      }
    }
  });
  // 代码块
  let code = vscode.commands.registerCommand("typora-shortcut-key.code", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }
    editor.edit((editBuilder) => {
      editBuilder.insert(
        new vscode.Position(getCursorPosition().line, getCursorPosition().character + 1),
        `
\`\`\`语言类型
代码块内容
\`\`\``
      );
    }).then(() => {
      // then 将光标选中语言类型
      let newStartPosition = new vscode.Position(getCursorPosition().line - 2, 3);
      let newEndPosition = new vscode.Position(getCursorPosition().line - 2, 7);
      editor.selection = new vscode.Selection(newStartPosition, newEndPosition);
    });
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
  context.subscriptions.push(lineCode);
  context.subscriptions.push(code);
}

function deactivate() { }

module.exports = {
  activate,
  deactivate,
};
