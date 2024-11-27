# Memory Usage Applet for Cinnamon DE
simple applet that shows percentage of used memory in panel
## Installation
1. Download the applet files.
2. Copy the `memory-usage@yourusername` directory to `~/.local/share/cinnamon/applets/`.
3. Enable the applet via Cinnamon Settings > Applets > Get more applets online.
## Usage
Once enabled, the memory usage percentage will be displayed directly on your panel. The applet updates every 2 seconds.
## Customization
- **Update Interval**: Modify the `Mainloop.timeout_add_seconds(2, ...)` line in `applet.js` to change the update interval.
- **Tooltip**: Customize the tooltip by modifying the `set_applet_tooltip` method in `applet.js`.
