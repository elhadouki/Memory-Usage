// Import required Cinnamon libraries
const Applet = imports.ui.applet;
const Util = imports.misc.util;
const Mainloop = imports.mainloop;

// Define the applet class
class MemoryUsageApplet extends Applet.TextApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);

        this.set_applet_tooltip(_("Memory Usage"));

        this.update_memory_usage();
        this.timeout = Mainloop.timeout_add_seconds(2, () => this.update_memory_usage());
    }

    update_memory_usage() {
        Util.spawn_async(['bash', '-c', 'free -m | grep Mem | awk \'{print int($3/$2 * 100)}\''], (stdout) => {
            let used_memory_percentage = parseInt(stdout);
            this.set_applet_label(used_memory_percentage + "%");
        });
        return true;
    }

    on_applet_removed_from_panel() {
        if (this.timeout) {
            Mainloop.source_remove(this.timeout);
            this.timeout = null;
        }
    }
}

// Register the applet
function main(metadata, orientation, panel_height, instance_id) {
    return new MemoryUsageApplet(metadata, orientation, panel_height, instance_id);
}
