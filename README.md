# GULP builder 0.1



## Consider that you have:
-  NodeJS installed version 
   ```
   > node -v
   v14.15.1
   ```
-  Gulp CLI installed (optional)
    ```
    > gulp -v
    CLI version: 2.3.0
    Local version: 4.0.2 
    ```
## Commands:
1. To install app use command
    ```
    npm install
    ```
2. To run build
   1. If ```gulp-cli``` installed
      ```
      gulp build
      ```
   2. If no ```gulp-cli``` installed
      ```
      npm run build
      ```
3. To run js build
   1. If ```gulp-cli``` installed
      ```
      gulp build:js
      ```
   2. If no ```gulp-cli``` installed
      ```
      npm run js
      ```

4. To run css build
   1. If ```gulp-cli``` installed
      ```
      gulp build:css
      ```
   2. If no ```gulp-cli``` installed
      ```
      npm run css
      ```
5. To run app in watch mode
   1. If ```gulp-cli``` installed
      ```
      gulp watch
      ```
   2. If no ```gulp-cli``` installed
      ```
      npm run watch
      ```


## gulpfile.js variables
1.  Sources for js files.
    ```
    const JS_SRC;
    ```
2.  Filename for js file in destination folder.
    ```
    const JS_DEST_FILENAME;
    ```
3. Destination folder name for js file.
    ```
    const JS_DEST_FOLDER;
    ```
4. Sources for css files.
    ```
    const CSS_SRC;
    ```
5. Filename for css file in destination folder.
    ```
    const CSS_DEST_FILENAME;
    ```
6. Destination folder name for css file.
    ```
    const CSS_DEST_FOLDER;
    ```

