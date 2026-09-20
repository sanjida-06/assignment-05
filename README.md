# Dev Stack Builder

Dev Stack Builder is a simple React web application where users can explore different programming languages, frameworks, and tools, and add them to their custom development stack.

## Links
- Live Site: [Add your live link here]
- GitHub Repository: [Add your repository link here]

## Technologies Used
- React
- TypeScript / JavaScript
- Tailwind CSS
- React Toastify
- React Icons
- Vite

## Key Features
1. Explore Technologies: View cards for frontend, backend, database, and DevOps tools with ratings, categories, and difficulty levels.
2. Build Your Stack: Click "Add to Stack" to add technologies to a sidebar list. Duplicate additions are prevented with a warning alert.
3. Manage Stack: Easily remove individual items or clear the entire stack with one click.

---

## Questions and Answers

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML code inside JavaScript. We use it in React because it makes building and reading UI components much easier and faster.

### 2. What is the difference between props and state?
- Props: Data passed from a parent component to a child component. Props are read-only and cannot be changed by the child.
- State: Data managed inside the component itself. State can change over time based on user interactions, and when state changes, the component updates on the screen.

### 3. What does the useState hook do, and where did you use it in this project?
The useState hook is used to create and manage state in a React component. In this project, I used useState in `App.tsx` to store the list of selected technologies in the stack, and in `Navbar.tsx` to toggle the mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook is used to perform side effects like fetching data from an external file or API after the component renders. I used useEffect to fetch the data from the `cards.json` file when the application loads.

### 5. Why does every item in a .map() list need a unique key prop?
React needs a unique `key` prop to identify each item in a list. This helps React know which item was added, changed, or deleted, so it only updates that specific element instead of re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on a condition (like using `if-else` or ternary operators). For example, in `YourStack.tsx`, if the stack is empty (`stack.length === 0`), it shows the "Stack is Empty" message, otherwise it shows the list of selected items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- Parent to Child: The parent passes data using props (e.g. `<Card card={singleCard} />`).
- Child to Parent: The parent passes a function as a prop to the child, and the child calls that function with data when an event happens (e.g. clicking the button calls `onAddToStack(card)`).
