# Cancel Employee Other Duties Assignment

> **Module:** ssi_employee_other_duties_assignment\
> **Model:** `employee_other_duties_assignment`\
> **Menu:** Human Resource > Career Management > Employee Other Duties Assignments\
> **Actor:** user in group `Employee Other Duties Assignment / Validator`\
> **State:** `draft`/`open`/`done` → `cancel`\
> **Requires:** `01-create`

## Pre-Condition

- **Record:** Status is **Draft**, **On Progress**, or **Done**.
- **Config:** An active `policy.template` grants `cancel_ok` for that state to the
  actor's group.
- **Access:** User has *Can Cancel* access right.

## Flow

1. Open the **Human Resource > Career Management > Employee Other Duties Assignments**
   menu.
2. Open the record to cancel.
3. Click the **Cancel** button.
4. In the wizard that appears, select the **Cancel Reason**.
5. Click **Confirm**.
6. Click **OK** on the confirmation dialog.

## Post-Condition

- Status changes to **Cancelled**.
