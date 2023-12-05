# React.js Counter Task

Welcome to the React.js Counter Task! This task involves implementing a counter functionality in a React.js project. You will need to clone the project, update specific files, and push your code back to your own repository.

## Task Overview

Your task is to implement the following functionality in the existing React.js project:

1. **Increment/Decrement Button Logic**: Implement logic to increase or decrease the count by 1 on button click.
2. **Custom Amount Addition**: Add an input box where users can enter any amount. Implement functionality so that when the "Add Amount" button is clicked, the count gets increased by the entered amount.
3. **Conditional Increase**: Implement a feature to only increase the count by the amount entered in the input box when the current count value is odd.

## Getting Started

1. **Clone the Repository**: First, you need to clone the repository to your local machine.

   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd [project-directory]
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

   or if you're using `yarn`:

   ```bash
   yarn install
   ```

## Files to Update

You will need to make changes in the following files. Look for comments in each file for specific instructions:

- `counterSlice.ts`: Update the Redux slice to handle the new actions.
- `thunks.ts`: Implement count conditional update[if odd] logic here.
- `Counter.tsx`: Update the React component to implement the new UI and logic.

## Requirements

- Correctly implement all the functionalities as described above.
- Ensure that you add proper types to your code (TypeScript).
- Write clean and readable code with proper comments.
- Make sure the application compiles and runs without errors.

## Submission

Once you have implemented the required functionality:

1. Commit your changes with a meaningful commit message.

   ```bash
   git commit -m "Implement counter functionality"
   ```

2. Push your changes to your own repository.

   ```bash
   git push origin [your-branch-name]
   ```

3. Submit the repo url to prithvi@smartdino.tech and cc arun@smartdino.tech

## Evaluation Criteria

- Correct implementation of the functionalities.
- Code quality and adherence to standard coding practices.
- Use of TypeScript for type safety.
- Creativity and problem-solving skills.

## Extra Points

- Extra points will be awarded for adding additional useful features or UI enhancements beyond the basic requirements.
- Clean code and proper usage of Git (e.g., meaningful commit messages) will also be considered for extra points.

Good luck with your task!
