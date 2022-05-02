# shareqr

shareqr is command-line tool for transfering files from PC to mobile devices via simple http server and generated QR code

## Installation

Use npm for instalation:

```bash
npm install -g shareqr
```

## Usage
Run command:
```bash
shareqr <path>
```
If is command executed, QR will be shown in terminal. Scan the QR mobile device that is connected to same network as PC. File will be downloaded to mobile.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
For local testing "shareqr" as command follow this steps:
```bash
git clone https://github.com/matejkoncal/shareqr.git
cd shareqr
npm i
npm link
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
