# Grid Game
This is a React application that allows players to navigate a 100x100 grid world, starting from point A and reaching point B. The grid world is divided into cells, and each cell can be in one of four states: Blank, Speeder, Lava, or Mud. The player starts with 200 points of health and 450 moves.

---

## Installation
To install and run the application, follow these steps:

Clone the repository to your local machine:

`npm install`
Start the development server: `npm run dev`.

Your terminal will show you which port the app is running on (default port is 5173).

## How To Test
To run tests, run `npm run test` in your terminal. You can also install the vitest extension in VSCode to have an interface. This project was built with Vite, and jest/mocha have a hard time running Vite projects. It's recommended to use Vitest for ease of integration.

### Running Cypress Tests
You can also run cypress tests to test UI components. 

`npm run test:cy` - will open cypress in an interactive window. **Note**: You must also have another terminal running the application to run interactive cypress tests. 

`npm run test:cy-run` - will run cypress headless. (Use this to just quickly make sure all cypress tests pass)

## How to Play
To play the game, use the arrow keys on your keyboard to move the player. Each time the player moves to a new cell, their health and move count are updated based on the state of the cell. The rules for each cell state are as follows:

- Blank: No effect on health but reduces moves by 1.
- Speeder: Reduces health by 5, but does not affect moves.
- Lava: Reduces health by 50 and moves by 10.
- Mud: Reduces health by 10 and moves by 5.

The player must reach point B before running out of health or moves.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.