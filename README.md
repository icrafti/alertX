# alertX
📢 alertX — Lightweight &amp; Beautiful Toast Notifications

✨ Features
✅ Shows on top of page content, top-right corner
✅ Fully responsive — centered top on mobile devices
✅ Supports types: success, danger, warning, info
✅ Auto-dismiss after N seconds
✅ Manual close button
✅ Smooth fade-in and fade-out animations
✅ Zero dependencies — pure vanilla JS
✅ Easy to customize via CSS

🚀 Installation
Option 1: Include via <script>
Copy alertX.js into your project and include it in your HTML:
<script src="alertX.js"></script>
Option 2: Paste the code directly
Just paste the alertX(...) function into your JS file or <script> tag.

🧩 Usage
Call the function with your desired parameters:
alertX('success', 'Data saved successfully!');
alertX('danger', 'An error occurred!', true, 5000); // auto-closes after 5s
alertX('warning', 'Please check your input', false); // stays until manually closed

🎨 Custom Styling
The plugin creates a container #alerts-containerX and elements with classes:
.alertX — base alert class
.alert-success, .alert-danger, etc. — for styling different types
.close — close button

Override styles in your own CSS:
.alertX {
    background: #333;
    color: white;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
.alert-success { background: #28a745; }
.alert-danger  { background: #dc3545; }
.alert-warning { background: #ffc107; color: #000; }
.alert-info    { background: #17a2b8; }
.close {
    color: rgba(255,255,255,0.8);
}
.close:hover {
    color: white;
}
✅ All styles are fully customizable to match your design system. 

📱 Responsive Behavior
On screens smaller than 768px — notifications appear centered at the top.

💡 Examples
// Success
alertX('success', '✅ Record added!');
// Error
alertX('danger', '❌ Failed to save data.');
// Warning without auto-close
alertX('warning', '⚠️ Check your internet connection', false);
// Info with HTML
alertX('info', 'New update <strong>available</strong>!', true, 6000);

🧑‍💻 Author
Made with ❤️ for developers who need a simple, lightweight notification solution — no Bootstrap or jQuery required.

Author: iCrafti
License: MIT 

📜 License
MIT — free to use in personal and commercial projects.
