
# React Basic SSR Template

This project provides a comprehensive template for setting up server-side rendering (SSR) with React. It includes a custom loader for handling `.jsx` files in Node.js, an on-the-fly bundler for both server and client code, and an example implementation of SSR, including bundle generation for the browser and hydration.

## Installation

To use this loader, you need to have Node.js 20.15.0+ installed.

1. Clone this repository:
    ```bash
    git clone https://github.com/Artexoid/react-basic-ssr-template.git
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

You can run your Node.js project with this loader by using the following command:

```bash
node --import ./loader/register-hooks.mjs ./app/index.mjs
```

This command will load your JSX files, transpile them to regular JavaScript, and create a bundle on the fly for server-side rendering.

You can start it with PM2 using the following command:

```bash
pm2 start /root/.nvm/versions/node/VARSION/bin/node --cwd /var/www/ROOT_DIR -- --import ./loader/register-hooks.mjs ./app/index.mjs
```


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
