## Auto Role Colour Change

### Overview

The Auto Role Colour Change feature allows users to change the color of their roles based on predefined settings. The Default prefix is !, mention the bot to find out the prefix of your server.

## Admin Commands

### Add User Role

**Description:** This command adds a user and their preferred role for color changing.

**Command:** `!rc add userid roleid`

**Example:**
- **`!rc add 756795184263462922 1095700166020960358`**

### Remove User Role

**Description:** This command removes a user and their role from the color change system.

**Command:** `!rc remove userid roleid`

**Example:**
- **`!rc remove 756795184263462922 1095700166020960358`**

### Add Default Color Code

**Description:** This command adds default color codes that the bot will use when changing role colors.

**Command:** `!rc hc haxcode`

**Example:**
- **`!rc hc 9d5dd4`**

### Set Favorite Command

**Description:** This command sets a specific command name for a perk user. When used, it will change that user's role color immediately to a new one.

**Command:** `!rc fav userid command-name`

**Example:**
- **`!rc fav 756795184263462922 voidy`**

## User Commands

### Add Favorite Color Code

**Description:** This command allows perk users to add favorite color codes to their roles. Favorite color codes are more likely to be used than the server default ones.

**Command:** `!rc fav code`

**Example:**
- **`!rc fav 9d5dd4`**
