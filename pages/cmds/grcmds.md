### Grinder System Commands

The Grinder system utilizes a prefix (customizable, `!` by default) followed by a command and optional arguments.

#### Grinder Management

* **`!grinder add <@user>`**
**aliases:**
: `!g add <@user>`,
: `!gr a <@user>`, 
: `!grd + <@user>`
> Adds a new grinder, mentioned `<@user>` to the system.

* **`!grinder check <@user>`** 
> **aliases:** 
> - `!g check <@user>`,
> - `!gr c <@user>`,
> - `!grd check <@user>`
> Retrieves the current status and information for the grinder mentioned `<@user>`.

* **`!grinder donoadd <@user> <amount>`** 
> **aliases:**
 - `!g donoadd <@user> <amount>`,
 - `!gr da <@user> <amount>`,
 - `!grd donoadd <@user`
> Add grinder donations manually to the mentioned `<@user>`, the amount can be provided as `10m`, `100m` format.

* **`!grinder donoremove <grinder_name> <user_mention>`** (aliases: `!g donoRemove <grinder_name> <user_mention>`, `!gr dr <grinder_name> <user_mention>`): Removes the user mentioned in `<user_mention>` from the donor list for the grinder named `<grinder_name>`.

* **`!grinder list`** (aliases: `!g list`, `!gr l`): Generates a list of all grinders currently registered in the system.

* **`!grinder remove <grinder_name>`** (aliases: `!g remove <grinder_name>`, `!gr rm <grinder_name>`): Permanently removes the grinder named `<grinder_name>` from the system.

* **`!grinder checkRetired <grinder_name>`** (aliases: `!g checkRetired <grinder_name>`, `!gr cr <grinder_name>`): Retrieves information about retired grinders, including their name and retirement reason (if provided).

* **`!grinder demote <grinder_name>`** (aliases: `!g demote <grinder_name>`, `!gr d <grinder_name>`): Demotes the grinder named `<grinder_name>` to a lower tier (if applicable within the bot's logic).

* **`!grinder promote <grinder_name>`** (aliases: `!g promote <grinder_name>`, `!gr p <grinder_name>`): Promotes the grinder named `<grinder_name>` to a higher tier (if applicable within the bot's logic).

#### Break Management (Sub-commands for `!grinder break`)

* **`!grinder break start <grinder_name> <duration>`** (aliases: `!g break start <grinder_name> <duration>`, `!gr b start <grinder_name> <duration>`): Initiates a break for the grinder named `<grinder_name>`, specifying the break duration `<duration>` (format may vary depending on implementation).

* **`!grinder break check <grinder_name>`** (aliases: `!g break check <grinder_name>`, `!gr b check <grinder_name>`): Retrieves the remaining time for an ongoing break associated with the grinder named `<grinder_name>`.

* **`!grinder break end <grinder_name>`** (aliases: `!g break end <grinder_name>`, `!gr b end <grinder_name>`): Forces an end to the ongoing break for the grinder named `<grinder_name>`.

* **`!grinder break list`** (aliases: `!g break list`, `!gr b list`): Generates a list of all currently ongoing breaks for registered grinders.

**Note:**

* Aliases provide flexibility in using the commands. You can use any of the listed variations for each command.
* Refer to the specific command descriptions for detailed information on arguments, usage, and expected behavior.

**Example:**

To add a new grinder named, use `!grinder add @Tea Lover`

