# ERP Stock Management System

## 1. Technology Stack

- **Frontend Framework:** Ionic 6 with Angular 13.
- **Backend:** PHP with MySQL database.
- **UI/UX:** Ionic UI Components, ensuring a consistent and responsive design across all platforms.
- **Platform:** Progressive Web App (PWA) to ensure a native-like experience on the web and mobile.
- **Architecture:** RESTful API with real-time synchronization capabilities.

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
- **Before designing UI for any page or component, Claude must ask the user for:**
  1. **Description:** A detailed description of what the UI should look like and its functionality
  2. **Reference:** Visual reference (screenshots, mockups, or links to similar designs)
- **User Options:**
  - User can provide both description and reference
  - User can provide only description (no reference)
  - User can provide only reference (no description)
  - User can decline to provide either (Claude will proceed with default design)
- **Example Prompt:**
  ```
  I need to design the UI for [page/component name]. 
  Please provide:
  1. A description of how you want this to look and function
  2. Any reference images, mockups, or links to similar designs
  
  You can provide both, either, or neither - just let me know your preference.
  ```

## 3. Development Roadmap

1.  **Accounting Section:** Enhance cash2, spend-record2, sub-account2, statement2, and edit-journal pages.
2.  **Inventory Management:** Develop and optimize item-stock, item-modal, and item-report pages.
3.  **Sales Management:** Improve sales, sales-record, and edit-sales pages.
4.  **Purchase Management:** Optimize purchase, edit-perch, and purchase-record pages.
5.  **Backend API Optimization:** Improve PHP API performance and database structure.
6.  **Cross-Module Integration:** Implement real-time synchronization and better user experience.
7.  **Testing & Deployment:** Comprehensive testing and system deployment.

## 4. File Structure

The project follows the standard Angular project structure. Key directories include:

- `src/app/pages`: For different pages (accounting, inventory, sales, purchase).
- `src/app/components`: For reusable UI components (item-modal, account-modal, print-modal).
- `src/app/services`: For data handling and API communication (ServicesService, StockServiceService, AuthServiceService).
- `src/assets`: For static assets like images and fonts.
- `myapi/`: PHP backend API with organized endpoints.
- `myapi/models/`: PHP model classes for data management.
- `myapi/config/`: Database configuration.

## 5. Todo Management Workflow

### 5.1 Overview
This ERP system uses a simple todo management approach with tasks and subtasks in checklist format. All project activities are tracked in `todo.md` for easy progress monitoring.

### 5.2 Workflow Rules

#### Task Management
- Tasks are organized in sections: Accounting, Inventory, Sales, Purchase, Backend, Integration, Testing
- Each main task has subtasks in checklist format
- Mark tasks as completed using checkboxes [x]
- Focus on one section at a time for better productivity

### 5.3 Todo.md Structure

Simple checklist format:
```markdown
## Section Name
- [ ] Main Task
  - [ ] Subtask 1
  - [ ] Subtask 2
  - [x] Completed subtask
```

### 5.4 Integration with Development Roadmap

The development roadmap items are tracked as follows:

1. **Accounting Section** → Tasks for cash2, spend-record2, sub-account2, statement2, edit-journal
2. **Inventory Management** → Tasks for item-stock, item-modal, item-report
3. **Sales Management** → Tasks for sales, sales-record, edit-sales
4. **Purchase Management** → Tasks for purchase, edit-perch, purchase-record
5. **Backend API Optimization** → Tasks for PHP API and database improvements
6. **Cross-Module Integration** → Tasks for real-time sync and UX improvements
7. **Testing & Deployment** → Tasks for comprehensive testing and deployment

### 5.5 Daily Workflow

1. **Start of Day**: Review todo.md and select next section to work on
2. **Task Progress**: Mark completed subtasks with [x]
3. **Task Completion**: Mark main tasks as completed when all subtasks are done
4. **End of Day**: Review progress and plan next day's focus
5. **Weekly Review**: Assess completed sections and plan next priorities

### 5.6 Example Todo Entries

```markdown
## 1. Accounting Section
- [ ] Cash2 Page Enhancement
  - [x] Optimize cash flow management UI
  - [ ] Improve voucher creation/editing forms
  - [ ] Add real-time balance calculations
  - [ ] Implement better date filtering

- [x] Spend-Record2 Page Enhancement
  - [x] Streamline expense entry forms
  - [x] Add expense categories and validation
  - [x] Implement bulk expense operations
```

### 5.7 Best Practices

- **Section Focus**: Work on one section at a time for better productivity
- **Regular Updates**: Update checkboxes throughout the day
- **Clear Progress**: Use [x] for completed tasks, [ ] for pending
- **Sequential Development**: Follow the roadmap sequence (Accounting → Inventory → Sales → Purchase)
- **Documentation**: Keep the todo list updated and organized