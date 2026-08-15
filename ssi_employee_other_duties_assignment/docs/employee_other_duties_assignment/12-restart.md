# Restart Employee Other Duties Assignment

> **Module:** ssi_employee_other_duties_assignment\
> **Model:** `employee_other_duties_assignment`\
> **Menu:** Human Resource > Career Management > Employee Other Duties Assignments\
> **Actor:** user in group `Employee Other Duties Assignment / Validator`\
> **State:** `cancel`/`reject` → `draft`\
> **Requires:** `10-cancel`

## Pre-Condition

- **Record:** Status is **Cancelled** or **Rejected**.
- **Config:** An active `policy.template` grants `restart_ok` for that state to the
  actor's group.
- **Access:** User has _Can Restart_ access right.

## Flow

1. Open the **Human Resource > Career Management > Employee Other Duties Assignments**
   menu.
2. Open the record to restart.
3. Click the **Restart** button.
4. Click **OK** on the confirmation dialog.

## Post-Condition

- Status returns to **Draft**.
- The document number, if it had been assigned, is cleared back to **/**.
