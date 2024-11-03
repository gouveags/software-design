# Software Design by Example – Exercises and Examples

Welcome to my repository, where I’m documenting my journey through [*Software Design by Example: A Tool-Based Introduction with JavaScript*](https://third-bit.com/sdxjs/). I discovered this book while exploring software design resources, and its practical, example-based approach to design in JavaScript immediately caught my attention.

## About this Repository

This project follows the examples and exercises in the book, with all code written by hand. I’ve also been using this as an opportunity to learn Neovim, so each line of code was crafted with purpose, both to study software design and to become comfortable with a new editor.

### Project Structure

To keep the project simple and focused:

- **Root Directory**:
  - Contains only the essential `package.json` and `package-lock.json` files to manage dependencies needed across all examples.
  - A basic `.gitignore` file that primarily excludes `node_modules`.
  
- **Chapter Folders**:
  - Each chapter has its own directory (`chapter1`, `chapter2`, etc.), with examples matching the names exactly as they appear in the book.
  - Some library dependencies used in the examples have evolved since the book was published. Instead of using the exact older versions, I’ve updated the code to work with the latest versions, noting the original example in comments at the top of each file.
  - This approach gives me a dual learning experience: understanding both the book’s intended examples and adapting to newer library versions. This also encourages reflection on why maintainers may have updated certain functionalities.

- **Exercise Folders**:
  - Each chapter also contains a separate folder for exercises, where I've implemented my own solutions.
  - Since the book doesn't specify file names for exercises, I added comments in each file with details to match the book’s suggested exercises to my solutions.

### Running the Code

To run the examples or exercises, you’ll need Node.js installed. Execute each file individually in the terminal using:

```bash
node filename.js ...args
```

### Disclaimer

Please note that this is **not an official resource** for *Software Design by Example*. It’s a personal project and may contain errors, discrepancies, or code that diverges from the book’s original examples, especially when adapting to newer library versions. 

This repository is meant for learning purposes, so if you find any issues or have suggestions, feel free to contribute or raise an issue. However, be aware that while I strive to keep everything functional, some examples may not reflect the latest best practices or exact outputs from the book.

---

Feel free to explore, suggest improvements, or join along if you're interested in learning software design in JavaScript!