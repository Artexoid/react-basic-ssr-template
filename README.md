
# JSX Loader for Node.js

This is a simple project that implements a custom loader for handling `.jsx` modules in Node.js. The loader uses `esbuild` to transpile JSX files on the fly.

## Installation

To use this loader, you need to have Node.js 20.15+ installed.

1. Clone this repository:
    ```bash
    git clone https://github.com/Artexoid/jsx-loader-example.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

You can run your Node.js project with this loader by using the following command:

```bash
node --import ./loader/register-hooks.mjs ./app/index.jsx
```

This command will load your JSX files and transpile them to regular JavaScript using the custom loader.

## File Structure

- `loader/`: Contains the custom loader code.
- `app/`: Contains the example application code.

## License

This project is licensed under the MIT License.

## Author

**Artem Goncharuk**

If you have any questions or feedback, feel free to reach out or open an issue on GitHub.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

---

*This project is maintained by Artem Goncharuk.*
