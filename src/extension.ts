import * as vscode from 'vscode';
import { FileSelector } from './fileSelector';

export function activate(context: vscode.ExtensionContext) {
  console.log('QuickSend Code2AI extension is now active');
  
  // Register the command to share files
  let disposable = vscode.commands.registerCommand('quicksend-code2ai.shareFiles', async () => {
    const fileSelector = new FileSelector(context);
    await fileSelector.showFileSelectorUI();
  });
  
  context.subscriptions.push(disposable);
}

export function deactivate() {}