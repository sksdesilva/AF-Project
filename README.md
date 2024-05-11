{
    "copyright": "\nFranco Fantasia & \nGuiseppe Conzo \n(Gruppo Astrofili Palidoro)\n",
    "date": "2024-05-11",
    "explanation": "Right now, one of the largest sunspot groups in recent history is crossing the Sun. Active Region 3664 is not only big -- it's violent, throwing off clouds of particles into the Solar System. Some of these CMEs are already impacting the Earth, and others might follow.  At the extreme, these solar storms could cause some Earth-orbiting satellites to malfunction, the Earth's atmosphere to slightly distort, and electrical power grids to surge. When impacting Earth's upper atmosphere, these particles can produce beautiful auroras, with some auroras already being reported unusually far south.  Pictured here, AR3664 and its dark …",
    "features": {
        "reactWebApp": {
            "title": "APOD",
            "description": "APOD is a react web application which utilize the nasa open api.",
            "liveDemoLink": "https://gentle-strudel-724d1f.netlify.app/",
            "version": "1.0.0",
            "scripts": {
                "dev": "Starts the development server using Vite.",
                "build": "Builds the application for production.",
                "lint": "Lints the project using ESLint.",
                "preview": "Previews the built application.",
                "test": "Runs tests using Jest."
            },
            "dependencies": [
                "React",
                "ReactDOM",
                "Emotion",
                "Kinde Auth React",
                "MUI",
                "React Query",
                "Axios",
                "Dayjs",
                "Jest Environment Jsdom",
                "OpenLayers (ol)",
                "React Leaflet",
                "React Markdown",
                "React Player",
                "React Router Dom",
                "TLE.js",
                "azure/keyvault-secrets"
            ],
            "devDependencies": [
                "Babel",
                "Testing Library",
                "Types",
                "Vite",
                "ESLint",
                "Jest"
            ],
            "testing": {
                "framework": "Jest",
                "tools": [
                    "Testing Library",
                    "Jest"
                ],
                "configuration": [
                    "Configure Babel for transpiling JavaScript.",
                    "Configure Jest environment to 'jsdom' for providing a browser-like environment for testing."
                ],
                "exampleTest": {
                    "description": "Renders rover card with photo details",
                    "file": "RoverCard.test.js",
                    "code": "import '@testing-library/jest-dom';\nimport React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport RoverCard from '../src/components/common/cards/RoverCard';\n\ntest('renders rover card with photo details', () => {\n  const photo = {\n    img_src: 'test_image.jpg',\n    rover: { name: 'Curiosity' },\n    camera: { name: 'FHAZ' },\n    earth_date: '2024-05-02',\n  };\n\n  render(<RoverCard photo={photo} />);\n\n  const roverNameElement = screen.getByText(/Rover Curiosity/i);\n  expect(roverNameElement).toBeInTheDocument();\n\n  const cameraNameElement = screen.getByText(/Camera FHAZ/i);\n  expect(cameraNameElement).toBeInTheDocument();\n\n  const dateElement = screen.getByText(/Taken In 2024-05-02/i);\n  expect(dateElement).toBeInTheDocument();\n});"
                }
            },
            "apiUsage": {
                "NASA": {
                    "endpoints": [
                        {
                            "name": "Daily Picture",
                            "endpoint": "planetary/apod",
                            "description": "This endpoint is used to fetch the astronomy picture of the day."
                        },
                        {
                            "name": "Mars Rover Pictures",
                            "endpoint": "mars-photos/api/v1/rovers/curiosity/photos",
                            "description": "This endpoint is used to fetch pictures taken by the Curiosity rover on Mars. The query parameters earth_date and camera can be used to filter the pictures by the Earth date when the picture was taken and the camera used to take the picture, respectively."
                        },
                        {
                            "name": "DONKI Notifications",
                            "endpoint": "DONKI/notifications",
                            "description": "This endpoint is used to fetch notifications from the DONKI (Space Weather Database Of Notifications, Knowledge, Information). The query parameters startDate, endDate, and type can be used to filter the notifications by the start date, end date, and type of the notifications, respectively."
                        }
                    ],
                    "toolsAndMethods": {
                        "Axios": "Axios is a promise-based HTTP client used to make HTTP requests to the NASA API.",
                        "React Query": "React Query is a data fetching and state management library for React. It provides hooks like useQuery to fetch, cache, and update data in the project in a declarative manner."
                    }
                }
            },
            "userSessionManagement": {
                "library": "KindleAuth",
                "features": [
                    "Authentication Status",
                    "Loading Status",
                    "Login and Registration"
                ],
                "configuration": "To use KindleAuth in a React application, import the useKindleAuth hook and destructure the required properties as shown below:\n\nconst { isAuthenticated, isLoading, login, register } = useKindleAuth();"
            },
            "styling": {
                "library": "Material-UI",
                "features": [
                    "ThemeProvider",
                    "Custom Theme"
                ],
                "setup": [
                    "Installation of necessary MUI packages",
                    "ThemeProvider setup in the root file",
                    "Custom theme creation and usage"
                ]
            },
            "deployment": {
                "platform": "Azure Static Web Apps",
                "steps": [
                    "Create a new Static Web App resource in Azure",
                    "Connect GitHub repository",
                    "Configure build settings",
                    "Review and create",
                    "Update workflow file",
                    "Push changes to GitHub"
                ]
            }
        }
    }
}
