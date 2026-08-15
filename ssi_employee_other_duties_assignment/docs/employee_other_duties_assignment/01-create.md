# Create Employee Other Duties Assignment

> **Module:** ssi_employee_other_duties_assignment\
> **Model:** `employee_other_duties_assignment`\
> **Menu:** Human Resource > Career Management > Employee Other Duties Assignments\
> **Actor:** user in group `Employee Other Duties Assignment / User`\
> **State:** `—` → `draft`

## Pre-Condition

- **Data:** At least one Employee Other Duties Assignment Type exists (see
  `employee_other_duties_assignment_type/01-create`).
- **Access:** User has _Can Create_ access right.

## Flow

1. Open the **Human Resource > Career Management > Employee Other Duties Assignments**
   menu.
2. Click the **New** button. **(14.0: "Create")**
3. Fill in the required fields:
   - **Employee** _(required)_: Defaults to the employee linked to the current user, if
     any. Select the employee this assignment is for.
   - **Department**: Automatically filled from **Employee**. Not editable.
   - **Manager**: Automatically filled from **Employee**. Not editable.
   - **Job Position**: Automatically filled from **Employee**. Not editable.
   - **Type** _(required)_: Select the Employee Other Duties Assignment Type.
   - **Date** _(required)_: Enter the assignment date. Used to generate the document
     number once the record reaches **On Progress**.
   - **Date Start** _(required)_: Enter the start date of the assignment.
   - **Date End**: Optional. Enter the end date of the assignment.
4. On the **Job Description** tab, fill in:
   - **Extra Job Descriptions** _(required)_: Select one or more job descriptions
     granted by this assignment.
5. Click **Save**.

## Post-Condition

- A new Employee Other Duties Assignment record is created in **Draft** status.
