# ✅ alertX — Lightweight Toast Notifications for the Web

A simple, dependency-free JavaScript plugin to show elegant toast-style notifications in the corner of the screen. Perfect for success messages, errors, warnings, and more — with auto-dismiss, animations, and mobile support.

> **Zero dependencies. Vanilla JS. Responsive. Customizable.**

---

## 📦 Installation

### Option 1: Include via `<script>`

Download `alertX.js` and include it in your HTML:

```html
<script src="alertX.js"></script>
```

### Option 2: Copy-paste the function

Just paste the `alertX` function directly into your project’s JavaScript file.

---

## 🚀 Usage

Call `alertX()` with type and message:

```js
alertX('success', 'Profile updated successfully!');
alertX('danger', 'Failed to save changes.', true, 5000); // auto-close after 5s
alertX('warning', 'Your session will expire soon.', false); // stay until closed
```

---

## ⚙️ Parameters

```js
alertX(type, message, autoClose = true, timeout = 3000)
```

| Parameter   | Type    | Default     | Description                          |
|-------------|---------|-------------|--------------------------------------|
| `type`      | string  | *required*  | Alert style: `success`, `danger`, `warning`, `info` |
| `message`   | string  | *required*  | Text or HTML content to display      |
| `autoClose` | boolean | `true`      | Whether to auto-dismiss the alert    |
| `timeout`   | number  | `3000`      | Time in milliseconds before auto-close |

---

## 🎨 Customization

The plugin automatically creates a container with ID `alerts-containerX`. You can override default styles by adding your own CSS.

### Example CSS:

```css
.alertX {
    padding: 14px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: system-ui, sans-serif;
    position: relative;
    min-width: 280px;
    max-width: 100%;
    margin: 0;
}

.alert-success { background: #d4edda; border-left: 4px solid #28a745; color: #155724; }
.alert-danger  { background: #f8d7da; border-left: 4px solid #dc3545; color: #721c24; }
.alert-warning { background: #fff3cd; border-left: 4px solid #ffc107; color: #856404; }
.alert-info    { background: #d1ecf1; border-left: 4px solid #17a2b8; color: #0c5460; }

.close {
    position: absolute;
    top: 8px;
    right: 12px;
    background: none;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    opacity: 0.6;
    padding: 0;
    line-height: 1;
}

.close:hover {
    opacity: 1;
}
```

> 💡 Tip: Use `border-left` for visual emphasis — common pattern in UI libraries.

---

## 📱 Responsive Behavior

- **Desktop**: Notifications appear in the **top-right corner**.
- **Mobile (≤768px)**: Centered at the **top of the screen**.

The container is styled with:

```css
#alerts-containerX {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 400px;
}

@media (max-width: 768px) {
    #alerts-containerX {
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        align-items: center;
    }
}
```

---

## 🧪 Examples

```js
// Success
alertX('success', '✅ Your changes were saved.');

// Error
alertX('danger', '❌ Something went wrong. Please try again.');

// Warning with HTML
alertX('warning', '⚠️ <strong>Heads up!</strong> Disk space is low.', true, 6000);

// Info without auto-close
alertX('info', 'ℹ️ New version available.', false);
```

---

## 📜 License

MIT — Free for personal and commercial use.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request for:

- Bug fixes
- Documentation improvements
- New features (themes, positions, callbacks, etc.)
- Accessibility enhancements

---

## 📬 Feedback

Found a bug? Have a suggestion?  
→ Open an [Issue](https://github.com/icrafti/alertX/issues)  
→ Or contact: [icraftixxx@gmail.com]

---

## ✅ Version

**v1.0.0**

---

> Made with ❤️ for developers who want clean, lightweight, no-framework notifications.

---
