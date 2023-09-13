# https://summraize.netlify.app/
# SummrAIze - Article Summarization App

SummrAIze is a web application built with React, Redux, and the Chat GPT API that allows users to easily summarize articles by providing the URL of the article they want to summarize. This app leverages the power of AI to provide concise and coherent summaries of lengthy articles.

## Features

- **Article Summarization**: Summarize articles from the web by providing the article URL.
- **Chat GPT API Integration**: Utilize the Chat GPT API to generate human-like summaries.
- **User-friendly Interface**: An intuitive and responsive user interface for a seamless user experience.
- **Redux State Management**: Manage application state efficiently using Redux for better scalability and maintainability.

## Getting Started

To get started with SummrAIze, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ilorde-exe/ai-summarize
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-summarize
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the Chat GPT API:

   - Sign up for an API key from [Rapid API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer).
   - Create a `.env` file in the project root and add your API key as follows:

     ```env
     VITE_RAPIDAPI_KEY=YOUR_API_KEY
     ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to use the SummrAIze app.

## Usage

1. Enter the URL of the article you want to summarize in the provided input field.

2. Click the submit button.

3. Wait for the AI-powered summarization process to complete.

4. The summarized content will be displayed on the screen.

5. You can copy the summary to your clipboard or share it as needed.

## Contributing

Contributions to SummrAIze are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes and commit them with descriptive commit messages.

4. Push your changes to your forked repository:

   ```bash
   git push origin feature/new-feature
   ```

5. Create a pull request against the `main` branch of the original repository.

6. Your pull request will be reviewed, and changes may be requested before merging.

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Rapid API](https://rapidapi.com)

---

Happy SummrAIzing!
```

