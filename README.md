# QuickSend Code2AI


**QuickSend Code2AI** is a VS Code extension that makes sharing code files with AI assistants like ChatGPT, Claude, Gemini, or any other AI tool effortless and efficient. Perfect for developers seeking AI help with their code!

## ✨ Features

- 🔄 **Universal AI Assistant Support**: Works with ChatGPT, Claude, Gemini, Bard, and other AI tools
- 📋 **One-Click Sharing**: Select and copy multiple files in just one click
- 🔍 **Smart File Browser**: Navigate, search, and select files from your workspace
- 📂 **Directory Organization**: Files are neatly organized by folder for easy navigation
- 📊 **All File Types Supported**: Share code, configs, docs, and any file type
- 🎨 **Beautifully Formatted Output**: Code is properly formatted with syntax highlighting markers
- ⚡ **Lightweight & Fast**: Minimal impact on VS Code performance

## 📸 Screenshots

<img src="images/quicksharecode2ai.png" alt="quicksharecode2ai.png">

## 🚀 Installation

Install directly from the VS Code Marketplace:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "QuickSend Code2AI"
4. Click Install

Alternatively, you can install using the VS Code Quick Open (Ctrl+P / Cmd+P), paste the following command, and press enter:

```
ext install ParekhDhruv.quicksend-code2ai
```

## 🔧 How to Use

1. **Launch the File Selector**:
   - Right-click in the Explorer and select "Share Files with AI Assistant"
   - Or use the Command Palette (Ctrl+Shift+P / Cmd+Shift+P) and type "Share Files with AI Assistant"

2. **Select Files**:
   - Browse through your workspace files
   - Check the files you want to share
   - Use the search feature to quickly find specific files

3. **Copy to Clipboard**:
   - Click the "Format & Copy" button
   - The selected files will be formatted and copied to your clipboard

4. **Paste to Your AI Assistant**:
   - Switch to your AI assistant (ChatGPT, Claude, etc.)
   - Paste the content (Ctrl+V / Cmd+V)
   - Ask your question about the code

## 💡 Use Cases

- **Get Code Reviews**: Share multiple files for comprehensive code reviews
- **Debug with AI**: Provide context by sharing both your code and error messages
- **Refactoring Help**: Let AI assistants help you refactor and improve your code
- **Learn Coding**: Get explanations of complex code structures
- **Code Generation**: Show examples to get better AI-generated code

## ⚙️ Extension Settings

This extension contributes the following settings:

* `quicksend-code2ai.excludeDirectories`: Directories to exclude from file selection (default: "node_modules, .git")
* `quicksend-code2ai.maxFileSizeKB`: Maximum file size in KB to include (default: 500)

## 📋 Output Format

Files are copied in a markdown-compatible format that works well with AI assistants:

```
# File: example.js
```javascript
// Your code is formatted like this
function example() {
  console.log("Hello World");
}
```

# File: styles.css
```css
body {
  font-family: Arial, sans-serif;
}
```
```

## 🔄 Compared to Alternatives

| Feature | QuickSend Code2AI | Manual Copy-Paste | Other Extensions |
|---------|-------------------|-------------------|------------------|
| Multi-file support | ✅ | ❌ | ⚠️ Limited |
| All file types | ✅ | ✅ | ⚠️ Some |
| AI-optimized formatting | ✅ | ❌ | ⚠️ Varies |
| Search functionality | ✅ | ❌ | ⚠️ Some |
| Directory navigation | ✅ | ❌ | ⚠️ Limited |
| Works with all AI assistants | ✅ | ✅ | ⚠️ Some |


## 📝 License

This project is licensed under the MIT License