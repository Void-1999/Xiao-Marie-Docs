## Staff Points System

### Overview

The Staff Points System allows tracking and awarding points to staff members based on their activity and actions logged within the server.

### Set Staff Log

**Description:** The main slash command for setting up the staff points system.

**Command:** `/set-staff-log`

### Set Role


**Description:** This command sets up the staff positions and their roles. You can choose from gman, eman, or tmod.

**Command:** `/set-role position: role:`


### Set Log Channel

**Description:** This command sets the log channel where the embeds of this system will be sent and where regular updates will be shown.

**Command:** `/set-log-channel channel:`


### Set Tracking Channels

**Description:** This command sets the channel IDs to track messages from tmods. Separate channel IDs with commas if there are multiple channels.

**Command:** `/set-tracking-channels:`


## Staff Logging Commands: Must have the required staff roles.


### Tmod Logger

**Description:** This command is for Tier Moderators (tmods) to log their actions such as moderation or chat reviews.

**Command:** `/staff-logger tmod action:`


### Eman Logger

**Description:** This command is for Event Managers (emans) to log their event actions.

**Command:** `/staff-logger eman action:`


### Gman Logger

**Description:** This command is for Giveaway Managers (gmans) to log their giveaway actions.

**Command:** `/staff-logger gman action:`


## Get Staff Logs Commands: Must have the required staff roles or admin or bot mod role.


### Get Tmod Logs

**Description:** This command retrieves the logs of tmod staff.

**Command:** `/getstafflogs tmod type:`


### Get Eman Logs

**Description:** This command retrieves the logs of eman staff.

**Command:** `/getstafflogs eman type:`


### Get Gman Logs

**Description:** This command retrieves the logs of gman staff.

**Command:** `/getstafflogs gman type:`


## Colored Log Chart

### Get Weekly Staff Logs

**Description:** This command retrieves a week's duration of colored chart logs.

**Command:** `/getweeklystafflogs`

**Color Format:**
- Points/Color format for Eman and Gman:
  - 🟥 for 0
  - 🟧 for 1
  - 🟨 for 2
  - 🟩 for 3 or +

- Points/Color format for Tmods:
  - 🟥 for 0-3
  - 🟧 for 3-5
  - 🟨 for 6-8
  - 🟩 for 8-10
