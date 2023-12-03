# HTML to JSX

The purpose of this app is to convert HTML to JSX. (The JSX is mainly used in React.js)

## License

Before you start contributing to this project, please review the [LICENSE](https://github.com/pythonpioneer/html-to-jsx/blob/jsx-converter/LICENSE) file to understand the licensing terms. By contributing to this project, you agree to abide by its terms.

## Getting Started

- Clone the repo

      git clone https://github.com/pythonpioneer/html-to-jsx.git

- Go to your project folder and install dependencies (make sure you have npm and node)

  ```
  cd html-to-jsx/app
  ```
  ```
  npm install
  ```

- After installation, To start the app

      npm start

- It will open your browser(http://localhost:3000)

## Note

The app is built on top of [Create React App](https://github.com/facebook/create-react-app), which means all features that create-react-app supports are available.

## Implementation

### Components used (open source)

- bootstrap

    Bootstrap is used to improve the user interface and implement the app quickly.

- react-dom/server
    The react-dom/server is used to convert the self-closing tag into JSX.

### Components used in the app (specific)

- Alert

    to display alerts, we used react-toastify.
  
- Navbar

    The Navbar is to display the app name. (no need to change the app theme)
  
- TextForm

    To display the form to enter HTML and to get JSX as output. The actual logic to convert the HTML to JSX is written in "app/src/utitlity".

## To Contribute

To contribute, go to the [contributing.md file](https://github.com/pythonpioneer/pythonpioneer/blob/main/guidelines/CONTRIBUTING.md). I will appreciate your efforts.
