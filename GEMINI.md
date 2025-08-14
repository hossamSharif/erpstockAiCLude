# Gemini Project: Coursera-like Educational Platform

## 1. Technology Stack

- **Frontend Framework:** Ionic 6 with Angular 19.
- **UI/UX:** Ionic UI Components, ensuring a consistent and responsive design across all platforms.
- **Platform:** Progressive Web App (PWA) to ensure a native-like experience on the web and mobile.

## 2. Development Rules & Standards

### Component Declaration Rule
- **All page components MUST have `standalone: false` in their `@Component` decorator**
- This ensures proper module-based architecture and prevents declaration issues
- Example:
  ```typescript
  @Component({
    selector: 'app-page-name',
    templateUrl: './page-name.page.html',
    styleUrls: ['./page-name.page.scss'],
    standalone: false,  // REQUIRED for all page components
  })
  export class PageNamePage implements OnInit {
    // Component logic here
  }
  ```
- **Exception:** Only reusable UI components (in `src/app/components/`) may use `standalone: true` if needed

### UI Design Rule
- **Before designing UI for any page or component, Gemini CLI MUST ask the user for:**
  1. **Description:** A detailed description of what the UI should look like and its functionality
  2. **Reference:** Visual reference (screenshots, mockups, or links to similar designs)
- **User Options:**
  - User can provide both description and reference
  - User can provide only description (no reference)
  - User can provide only reference (no description)
  - User can decline to provide either (Gemini will proceed with default design)
- **Example Prompt:**
  ```
  I need to design the UI for [page/component name]. 
  Please provide:
  1. A description of how you want this to look and function
  2. Any reference images, mockups, or links to similar designs
  
  You can provide both, either, or neither - just let me know your preference.
  ```

## 3. Development Roadmap

1.  **Project Setup:** Initialize a new Ionic/Angular project and configure it as a PWA.
2.  **Authentication Module:** Implement user registration, login, and session management.
3.  **Course Service & Catalog:** Create a service to manage course data and build the UI for the course catalog.
4.  **Course Content Pages:** Develop pages for displaying course materials (videos, text, etc.).
5.  **Enrollment & Progress:** Implement the logic for course enrollment and tracking user progress.
6.  **Styling & Responsiveness:** Apply global styles and ensure the layout is responsive on all target devices.
7.  **Testing & Deployment:** Thoroughly test the application and deploy it.

## 4. File Structure

The project will follow the standard Angular project structure. Key directories will include:

- `src/app/pages`: For different pages of the application (e.g., login, dashboard).
- `src/app/components`: For reusable UI components.
- `src/app/services`: For data handling and API communication.
- `src/assets`: For static assets like images and fonts.